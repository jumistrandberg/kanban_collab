import { useState } from "react";
import styles from "../styling/Task.module.css";
import { useDispatch } from "react-redux";
import { removeTask } from "../features/tasks/taskSlice";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineDeleteForever as DeleteBtn } from "react-icons/md";
import TaskPopup from "./TaskPopup";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.taskContainer} onClick={handleClick}>
      <h4>{task.title}</h4>
      <RxAvatar />

      <p>{new Date().toDateString("sv-SV")}</p>
      <DeleteBtn
        className={styles.deleteIcon}
        onClick={() => dispatch(removeTask(task.id))}
      />
      {showPopup && <TaskPopup task={task} onClose={handleClose} />}
    </div>
  );
};

export default Task;
