import { React, useState } from "react";
import Task from "./Task";
import AddTask from "./AddTask";
import styles from "../styling/Column.module.css";
import useDragAndDrop from "../customHooks/useDragAndDrop";

import { useSelector } from "react-redux";
//använder vi setTasks någonstans???
import { setTasks } from "../features/tasks/taskSlice";

import { MdOutlineDeleteForever as DeleteBtn } from "react-icons/md";
import ConfirmDeletionModal from "./ConfirmDeletionModal";
import DropIndicator from "./DropIndicator";

const Column = ({ columnId, title }) => {
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState(false);
  const tasks = useSelector((state) => state.allTaskReducer.tasks);
  //filteredUsers is the same for all tasks and therefore can tasks[0] be used
  const filteredUsers = tasks.length > 0 ? tasks[0].filteredUsers : [];

  const ConfirmDeletion = () => {
    setShowModal(true);
  };

  const { handleDragStart, handleDragEnd, handleDragOver, handleDragLeave } =
    useDragAndDrop(columnId, "Board", setActive);

  //filter tasks based on filtered users
  let tasksFilteredByUsers = [];
  if (tasks.length > 0) {
    const noFilters = filteredUsers.length === 0;
    if (noFilters) {
      tasksFilteredByUsers = tasks;
    } else {
      tasksFilteredByUsers = tasks.filter((task) =>
        task.assignedUsers.some((user) => filteredUsers.includes(user))
      );
    }
  }

  // filter tasks based on the columnId
  const tasksToDisplay = tasksFilteredByUsers.filter(
    (task) => task.atColumnId === columnId
  );

  return (
    // change class for column highlight when dragging over
    <section
      className={!active ? "column" : "active-column"}
      onDragOver={(e) => handleDragOver(e, columnId)}
      onDragLeave={handleDragLeave}
      onDrop={handleDragEnd}
    >
      <div className={styles.column}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{title}</h2>
          <DeleteBtn className={styles.delete} onClick={ConfirmDeletion} />
        </div>
        {tasksToDisplay.map((task) => {
          return (
            <Task
              columnId={columnId}
              handleDragStart={handleDragStart}
              key={task.id}
              task={task}
            />
          );
        })}
        <DropIndicator beforeTaskId={null} columnId={columnId} />
        <AddTask columnId={columnId} />
        {showModal && (
          <ConfirmDeletionModal
            setShowModal={setShowModal}
            columnId={columnId}
            tasks={tasks}
          />
        )}
      </div>
    </section>
  );
};

export default Column;
