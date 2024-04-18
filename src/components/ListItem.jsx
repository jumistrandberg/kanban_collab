import React from "react";
import styles from "../styling/ListPage.module.css";
import { useSelector } from "react-redux";
const ListItem = ({ task }) => {
  const columns = useSelector((state) => state.allColumnReducer.columns);
  const columnName = columns.at(task.atColumnIndex);

  return (
    <div className={styles.listItem}>
      <p>{task.title}</p>
      <p>assigned</p>
      <p>{columnName.title}</p>
    </div>
  );
};

export default ListItem;
