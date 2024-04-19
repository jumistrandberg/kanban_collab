import React from "react";
import styles from "../styling/Task.module.css";
import { useDispatch } from "react-redux";
import { removeTask } from "../features/tasks/taskSlice";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineDeleteForever as DeleteBtn } from "react-icons/md";
import DropIndicator from "./DropIndicator";

const Task = ({ columnId, handleDragStart, task }) => {
  const dispatch = useDispatch();
  return (
    <>
      <DropIndicator beforeTaskId={task.id} columnId={columnId} />
      <div
        className={styles.taskContainer}
        draggable={true}
        onDragStart={(e) => handleDragStart(e, task)}
      >
        <h4>{task.title}</h4>
        <RxAvatar />

        <p>{new Date().toDateString("sv-SV")}</p>
        <DeleteBtn
          className={styles.deleteIcon}
          onClick={() => dispatch(removeTask(task.id))}
        />
      </div>
    </>
  );
};

export default Task;
