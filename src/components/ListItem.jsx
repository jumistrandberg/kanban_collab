import React from "react";
import styles from "../styling/ListPage.module.css";
import { useSelector } from "react-redux";
const ListItem = ({ task }) => {
  //get all columns from redux and find the collum that the task is assigned to
  const columns = useSelector((state) => state.allColumnReducer.columns);
  const columnName = columns.find((column) => column.id == task.atColumnId);

  return (
    <div className={styles.listItem}>
      <p>{task.title}</p>
      <p>assigned</p>
      <p>{columnName.title}</p>
    </div>
  );
};

export default ListItem;
