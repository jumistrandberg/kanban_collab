import { React, useState } from "react";
import Task from "./Task";
import AddTask from "./AddTask";
import styles from "../styling/Column.module.css";
import useDragAndDrop from "../customHooks/useDragAndDrop";

import { useSelector, useDispatch } from "react-redux";
import { setTasks } from "../features/tasks/taskSlice";

import { MdOutlineDeleteForever as DeleteBtn } from "react-icons/md";
import ConfirmDeletionModal from "./ConfirmDeletionModal";
import DropIndicator from "./DropIndicator";

const Column = ({ columnId, title }) => {
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState(false);
  const tasks = useSelector((state) => state.allTaskReducer.tasks);
  const users = useSelector((state) => state.allUsersReducer.users);
  //filteredUsers is the same for all tasks and therefore can tasks[0] be used
  const filteredUsers = tasks.length > 0 ? tasks[0].filteredUsers : [];

  const dispatch = useDispatch();

  const ConfirmDeletion = () => {
    setShowModal(true);
  };

  const { handleDragStart, handleDragEnd, handleDragOver, handleDragLeave } =
    useDragAndDrop(columnId, "Board", setActive);

  //filter tasks based on filtered users
  let tasksFilteredByUsers;
  if (tasks.length > 0) {
    const allUsersSelected = filteredUsers.length === 0;
    if (allUsersSelected) {
      tasksFilteredByUsers = tasks;
    } else {
      tasksFilteredByUsers = tasks.filter((task) =>
        task.assignedUsers.some((user) => filteredUsers.includes(user))
      );
    }
  }
  console.log("filterade matchningar: ", tasksFilteredByUsers);

  // filter tasks based on the columnId
  let tasksToDisplay;
  if (tasksFilteredByUsers) {
    tasksToDisplay = tasksFilteredByUsers.filter(
      (task) => task.atColumnId === columnId
    );
  } else {
    tasksToDisplay = tasks.filter((task) => task.atColumnId === columnId);
  }
  // const filteredTasks = tasks.filter((task) => task.atColumnId === columnId);

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
