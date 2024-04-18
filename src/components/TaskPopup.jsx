import React from "react";
import { MdClose } from "react-icons/md";
import styles from "../styling/TaskPopup.module.css";

const TaskPopup = ({ task, onClose }) => {
  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div className={styles.TaskPopupContainer}>
      <div className={styles.Overlay}></div>
      <div className={styles.Popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.CloseBtn} onClick={handleClose}>
          <MdClose />
        </button>
        <h3>{task.title}</h3>
      </div>
    </div>
  );
};

export default TaskPopup;
