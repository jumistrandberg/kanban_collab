import React from "react";
import { MdClose } from "react-icons/md";
import styles from "../styling/TaskPopup.module.css";

const TaskPopup = ({ task, onClose }) => {
  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <>
      <div className={styles.PopupOverlay} onClick={onClose}></div>
      <div
        className={styles.TaskPopupContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={handleClose}>
          <MdClose />
        </button>
        <h4>{task.title}</h4>
      </div>
    </>
  );
};

export default TaskPopup;
