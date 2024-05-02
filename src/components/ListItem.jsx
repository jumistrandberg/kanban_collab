import React from "react";
import styles from "../styling/ListPage.module.css";
import { useSelector } from "react-redux";
import ColumnDropdownSelector from "./ColumnDropdownSelector";
import DropIndicator from "../components/DropIndicator";
import AssignedUsersDisplay from "./AssignedUsersDisplay";
const ListItem = ({ task, handleDragStart }) => {
  return (
    <>
      <DropIndicator beforeTaskId={task.id} columnId={"ListColumn"} />
      <div
        className={styles.listItem}
        onDragStart={(e) => handleDragStart(e, task)}
        draggable={true}
      >
        <h4>{task.title}</h4>
        <AssignedUsersDisplay isLargeView={true} task={task} />
        <ColumnDropdownSelector task={task} />
      </div>
    </>
  );
};

export default ListItem;
