import React from "react";
import styles from "../styling/Task.module.css";
import { useDispatch } from "react-redux";
import { removeTask } from "../features/tasks/taskSlice";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineDeleteForever as DeleteBtn } from "react-icons/md";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.taskContainer}>
      <h4>{task.title}</h4>
      <RxAvatar />

      <p>{new Date().toDateString("sv-SV")}</p>
      <DeleteBtn
        className={styles.deleteIcon}
        onClick={() => dispatch(removeTask(task.id))}
      />
    </div>
  );
};

export default Task;
