import { useState } from "react";
import styles from "../styling/Task.module.css";
import { useDispatch } from "react-redux";
import { removeTask } from "../features/tasks/taskSlice";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineDeleteForever as DeleteBtn } from "react-icons/md";

import DropIndicator from "./DropIndicator";

import TaskPopup from "./TaskPopup";

const Task = ({ columnId, handleDragStart, task }) => {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      <DropIndicator beforeTaskId={task.id} columnId={columnId} />
      <div
        className={styles.taskContainer}
        draggable={true}
        onDragStart={(e) => handleDragStart(e, task)}
        onClick={handleClick}
      >
        <h4>{task.title}</h4>
        <RxAvatar />

        <p>{new Date().toDateString("sv-SV")}</p>
        <DeleteBtn
          className={styles.deleteIcon}
          onClick={() => dispatch(removeTask(task.id))}
        />
        {showPopup && <TaskPopup task={task} onClose={handleClose} />}
      </div>
    </>
  );
};

export default Task;
