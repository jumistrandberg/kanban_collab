import { useEffect, useState } from "react";
import styles from "../styling/Task.module.css";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../features/tasks/taskSlice";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineDeleteForever as DeleteBtn } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { CgSandClock } from "react-icons/cg";
import { format } from "date-fns";

import DropIndicator from "./DropIndicator";

import TaskPopup from "./TaskPopup";

const Task = ({ columnId, handleDragStart, task }) => {
  const dispatch = useDispatch();
  const reduxTasks = useSelector((state) => state.allTaskReducer.tasks);
  const reduxTask = reduxTasks.find((reduxTask) => task.id === reduxTask.id);
  const deadlineDate = new Date(reduxTask.deadline);
  const doDate = new Date(reduxTask.doDate);

  const [showPopup, setShowPopup] = useState(false);
  const [deadlineColor, setDeadlineColor] = useState("");

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  let dateOutput = "";
  if (reduxTask.deadline && reduxTask.doDate) {
    const formattedDeadline = format(deadlineDate, "dd MMM");
    const formattedDoDate = format(doDate, "dd MMM");
    dateOutput = (
      <div className={styles.cardDate_div + " " + deadlineColor}>
        <CgSandClock style={{ fontSize: "1.4em", opacity: "0.7" }} />
        <p>
          {formattedDoDate} - {formattedDeadline}
        </p>
      </div>
    );
  } else if (reduxTask.doDate) {
    const formattedDoDate = format(doDate, "dd MMM");
    dateOutput = (
      <div className={styles.cardDate_div + " " + deadlineColor}>
        <FiClock
          style={{ fontSize: "1.4em", marginRight: "0.2em", opacity: "0.7" }}
        />
        <p>Startar: {formattedDoDate}</p>
      </div>
    );
  } else if (reduxTask.deadline) {
    const formattedDeadline = format(deadlineDate, "dd MMM");
    dateOutput = (
      <div className={styles.cardDate_div + " " + deadlineColor}>
        <CgSandClock style={{ fontSize: "1.4em", opacity: "0.7" }} />
        <p>{formattedDeadline}</p>
      </div>
    );
  }

  useEffect(() => {
    if (reduxTask.deadline) {
      const currentDate = new Date();
      const differenceInTime = deadlineDate.getTime() - currentDate.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);

      if (differenceInDays < 0) {
        setDeadlineColor(styles.passedDeadline); // Deadline passed
      } else if (differenceInDays <= 1) {
        setDeadlineColor(styles.nearDeadline); // Deadline today
      } else if (differenceInDays >= 3) {
        setDeadlineColor(styles.notNearDeadline); // 3 days left
      } else {
        setDeadlineColor(""); // Default color
      }
    }
  }, [reduxTask.deadline]);

  return (
    <>
      <DropIndicator beforeTaskId={task.id} columnId={columnId} />
      <div
        className={styles.taskContainer}
        draggable={showPopup ? false : true}
        onDragStart={(e) => handleDragStart(e, task)}
        onClick={handleClick}
      >
        <h4>{task.title}</h4>
        <DeleteBtn
          className={styles.deleteIcon}
          onClick={() => dispatch(removeTask(task.id))}
        />
        <div className={styles.date_avatar_div}>
          {dateOutput}
          <RxAvatar className={styles.miniAvatar} />
        </div>
      </div>
      {showPopup && <TaskPopup task={task} onClose={handleClose} />}
    </>
  );
};

export default Task;
