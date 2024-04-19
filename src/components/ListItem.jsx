import React from "react";
import styles from "../styling/ListPage.module.css";
import { useSelector } from "react-redux";
import ColumnDropdownSelector from "./ColumnDropdownSelector";
const ListItem = ({ task }) => {
  return (
    <div className={styles.listItem}>
      <p>{task.title}</p>
      <p>assigned</p>

      <ColumnDropdownSelector defaultColumnId={task.atColumnId} task={task} />
    </div>
  );
};

export default ListItem;
