import { React, useState } from "react";
import Task from "./Task";
import AddTask from "./AddTask";
import styles from "../styling/Column.module.css";
import { useSelector } from "react-redux";
import { MdOutlineDeleteForever as DeleteBtn } from "react-icons/md";
import ConfirmDeletionModal from "./ConfirmDeletionModal";

const Column = ({ columnId, title }) => {
  const [showModal, setShowModal] = useState(false);
  const tasks = useSelector((state) => state.allTaskReducer.tasks);
  const ConfirmDeletion = () => {
    setShowModal(true);
  };
  return (
    <div className={styles.column}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{title}</h2>
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
