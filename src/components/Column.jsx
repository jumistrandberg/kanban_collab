import { React, useEffect, useState } from "react";
import Task from "./Task";
import AddTask from "./AddTask";
import styles from "../styling/Column.module.css";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineDeleteForever as DeleteBtn } from "react-icons/md";
import ConfirmDeletionModal from "./ConfirmDeletionModal";
import { changeColumn } from "../features/columns/columnSlice";

const Column = ({ columnId, title }) => {
  const [showModal, setShowModal] = useState(false);
  const tasks = useSelector((state) => state.allTaskReducer.tasks);
  const [newTitle, setNewTitle] = useState(title);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTitle = localStorage.getItem(`columnTitle_${columnId}`);
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
    localStorage.setItem(`columnTitle_${columnId}`, newTitle);
  };

  const ConfirmDeletion = () => {
    setShowModal(true);
  };

  return (
    <div className={styles.column}>
      <div className={styles.titleContainer}>
        <input
          className={styles.title}
          type="text"
          value={newTitle}
          onChange={handleTitleChange}
          onBlur={handleTitleUpdate}
        />
        {/* <h2 className={styles.title}>{title}</h2> */}
        <DeleteBtn className={styles.delete} onClick={ConfirmDeletion} />
      </div>
      {tasks.map((task) =>
        task.atColumnId === columnId ? <Task key={task.id} task={task} /> : null
      )}
      <AddTask columnId={columnId} />
      {showModal && (
        <ConfirmDeletionModal
          setShowModal={setShowModal}
          columnId={columnId}
          tasks={tasks}
        />
      )}
    </div>
  );
};

export default Column;
