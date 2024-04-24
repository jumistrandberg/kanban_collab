import React from "react";
import styles from "../styling/ListPage.module.css";
import { useSelector } from "react-redux";
import ColumnDropdownSelector from "./ColumnDropdownSelector";
import DropIndicator from "../components/DropIndicator";
const ListItem = ({ task, handleDragStart }) => {
  return (
    <>
      <DropIndicator beforeTaskId={task.id} columnId={"ListColumn"} />
      <div
        className={styles.listItem}
        onDragStart={(e) => handleDragStart(e, task)}
      >
        <p>{task.title}</p>
        <p>assigned</p>
        <ColumnDropdownSelector task={task} />
      </div>
    </>
  );
};

export default ListItem;
