import React from "react";
import styles from "../styling/Task.module.css";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineDeleteForever as DeleteBtn } from "react-icons/md";

const Task = () => {
  return (
    <div className={styles.taskContainer}>
      <h4>task title here</h4>
      <RxAvatar />

      <p>{new Date().toDateString("sv-SV")}</p>
      <DeleteBtn className={styles.deleteIcon} />
    </div>
  );
};

export default Task;
