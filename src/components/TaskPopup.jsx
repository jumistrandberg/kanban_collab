import React from "react";
import { MdClose } from "react-icons/md";
import styles from "../styling/TaskPopup.module.css";

const TaskPopup = ({ task, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <div className={styles.PopupOverlay} onClick={handleClose}></div>
      <div className={styles.TaskPopupContainer}>
        <button className={styles.closeButton} onClick={handleClose}>
          <MdClose />
        </button>
        <h4>{task.title}</h4>
      </div>
    </>
  );
};

export default TaskPopup;
