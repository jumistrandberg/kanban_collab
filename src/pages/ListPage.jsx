import React from "react";
import styles from "../styling/ListPage.module.css";
import ListItem from "../components/ListItem";
import { useSelector } from "react-redux";
const ListPage = () => {
  const tasks = useSelector((state) => state.allTaskReducer.tasks);

  return (
    <section className={styles.listContainer}>
      <h2>List view</h2>
      {tasks.map((task) => (
        <ListItem task={task} />
      ))}
    </section>
  );
};

export default ListPage;
