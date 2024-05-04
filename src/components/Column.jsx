import { React, useState } from "react";
import Task from "./Task";
import AddTask from "./AddTask";
import styles from "../styling/Column.module.css";
import useDragAndDrop from "../customHooks/useDragAndDrop";

import { useSelector, useDispatch } from "react-redux";
import { updateColumnTitle } from "../features/columns/columnSlice";

import { MdOutlineDeleteForever as DeleteBtn } from "react-icons/md";
import ConfirmDeletionModal from "./ConfirmDeletionModal";
import DropIndicator from "./DropIndicator";

import useActiveUser from "../customHooks/useActiveUser";

const Column = ({ columnId, title }) => {
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState(false);
  const tasks = useSelector((state) => state.allTaskReducer.tasks);
  const activeUser = useActiveUser();
  //filteredUsers is the same for all tasks and therefore can tasks[0] be used
  const filteredUsers = tasks.length > 0 ? tasks[0].filteredUsers : [];

  const handleTitleChange = (e) => {
    dispatch(updateColumnTitle({ id: columnId, title: e.target.value }));
  };

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
      
      className={"column"}
      // when the task is hovered over a colum, this code will change the color more transparent so the user can see on which column it is
      style={!active ?{ backgroundColor: activeUser.settings.column }: { backgroundColor: activeUser.settings.column+"80"}}
      onDragOver={(e) => handleDragOver(e, columnId)}
      onDragLeave={handleDragLeave}
      onDrop={handleDragEnd}
    >
      <div className={styles.column}>
        <div className={styles.titleContainer}>
          <input
            className={styles.title}
            style={{ color: activeUser.settings.columnText }}
            type="text"
            value={title}
            onChange={handleTitleChange}
            onBlur={handleTitleChange}
          />
          <DeleteBtn className={styles.delete} style={{color: activeUser.settings.column }} onClick={ConfirmDeletion} />
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
