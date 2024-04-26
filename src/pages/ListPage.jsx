import React from "react";
import styles from "../styling/ListPage.module.css";
import ListItem from "../components/ListItem";
import { useSelector } from "react-redux";
import useDragAndDrop from "../customHooks/useDragAndDrop";
import DropIndicator from "../components/DropIndicator";
const ListPage = () => {
  const tasks = useSelector((state) => state.allTaskReducer.tasks);

  const { handleDragStart, handleDragEnd, handleDragOver, handleDragLeave } =
    useDragAndDrop("ListColumn", "List");

  return (
    <section
      id="ListColumn"
      className={styles.listContainer}
      onDragOver={(e) => handleDragOver(e, "ListColumn")}
      onDragLeave={handleDragLeave}
      onDrop={handleDragEnd}
    >
      <h2>List view</h2>
      {tasks.map((task) => (
        <ListItem
          key={`listItem-${task.id}`}
          task={task}
          handleDragStart={handleDragStart}
        />
      ))}
      <DropIndicator beforeTaskId={null} columnId={"ListColumn"} />
    </section>
  );
};

export default ListPage;
