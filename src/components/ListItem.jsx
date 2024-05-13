import React from "react";
import styles from "../styling/ListPage.module.css";
import { useState } from "react";
import ColumnDropdownSelector from "./ColumnDropdownSelector";
import DropIndicator from "../components/DropIndicator";
import AssignedUsersDisplay from "./AssignedUsersDisplay";
import TaskPopup from "./TaskPopup";
const ListItem = ({ task, handleDragStart }) => {
  const [showPopup, setShowPopup] = useState(false);
  const handleClick = () => {
    setShowPopup(true);
  };
  const handleClose = () => {
    setShowPopup(false);
  };
  return (
    <>
      <DropIndicator beforeTaskId={task.id} columnId={"ListColumn"} />
      <div
        className={styles.listItem}
        onDragStart={(e) => handleDragStart(e, task)}
        draggable={true}
      >
        <div onClick={handleClick} className="title-icon-container">
          <h4> {task.title}</h4>
          <AssignedUsersDisplay isLargeView={true} task={task} />
        </div>

        <div>
          <ColumnDropdownSelector task={task} />
        </div>
      </div>
      {showPopup && <TaskPopup task={task} onClose={handleClose} />}
    </>
  );
};

export default ListItem;
