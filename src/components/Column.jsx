import React from "react";
import Task from "./Task";
import AddTask from "./AddTask";
import styles from "../styling/Column.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeColumn } from "../features/columns/columnSlice";
import { MdOutlineDeleteForever as DeleteBtn } from "react-icons/md";

const Column = ({ id, columnIndex, title }) => {
  const tasks = useSelector((state) => state.allTaskReducer.tasks);
  const dispatch = useDispatch();
  return (
    <div className={styles.column}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{title}</h2>
        <DeleteBtn
          className={styles.delete}
          onClick={() => dispatch(removeColumn(id))}
        />
      </div>
      {tasks.map((task) =>
        task.atColumnIndex === columnIndex ? (
          <Task key={task.id} task={task} />
        ) : null
      )}
      <AddTask columnIndex={columnIndex} />
    </div>
  );
};

export default Column;
