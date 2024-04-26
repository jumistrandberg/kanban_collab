import { React, useEffect, useState } from "react";
import Task from "./Task";
import AddTask from "./AddTask";
import styles from "../styling/Column.module.css";
import useDragAndDrop from "../customHooks/useDragAndDrop";

import { useSelector, useDispatch } from "react-redux";
import { setTasks } from "../features/tasks/taskSlice";

import { MdOutlineDeleteForever as DeleteBtn } from "react-icons/md";
import ConfirmDeletionModal from "./ConfirmDeletionModal";
import DropIndicator from "./DropIndicator";
import { changeColumn } from "../features/columns/columnSlice";

const Column = ({ columnId, title }) => {
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState(false);
  const tasks = useSelector((state) => state.allTaskReducer.tasks);
  const [newTitle, setNewTitle] = useState(title);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTitle = localStorage.getItem(`columnTitle${columnId}`);
    if (storedTitle) {
      setNewTitle(storedTitle);
    }
  }, [columnId]);

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleTitleUpdate = () => {
    dispatch(
      changeColumn({
        id: columnId,
        title: newTitle,
      })
    );
    localStorage.setItem(`columnTitle${columnId}`, newTitle);
  };

  const ConfirmDeletion = () => {
    setShowModal(true);
  };

  const { handleDragStart, handleDragEnd, handleDragOver, handleDragLeave } =
    useDragAndDrop(columnId, "Board", setActive);

  // filter tasks based on the columnId
  const filteredTasks = tasks.filter((task) => task.atColumnId === columnId);

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
          <input
            className={styles.title}
            type="text"
            value={newTitle}
            onChange={handleTitleChange}
            onBlur={handleTitleUpdate}
          />
          <DeleteBtn className={styles.delete} onClick={ConfirmDeletion} />
        </div>
        {filteredTasks.map((task) => {
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
