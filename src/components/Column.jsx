import React from "react";
import Task from "./Task";
import AddTask from "./AddTask";
import styles from "../styling/Column.module.css";
const Column = () => {
  return (
    <div className={styles.column}>
      <h2 className={styles.title}>column name</h2>
      <Task />
      <Task />
      <Task />
      <AddTask />
    </div>
  );
};

export default Column;
