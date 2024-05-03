import React from "react";
import styles from "../styling/ListPage.module.css";
import ListItem from "../components/ListItem";
import { useSelector } from "react-redux";
import useDragAndDrop from "../customHooks/useDragAndDrop";
import DropIndicator from "../components/DropIndicator";

const ListPage = () => {
  const tasks = useSelector((state) => state.allTaskReducer.tasks);
  //filteredUsers is the same for all tasks and therefore can tasks[0] be used
  const filteredUsers = tasks.length > 0 ? tasks[0].filteredUsers : [];

  const { handleDragStart, handleDragEnd, handleDragOver, handleDragLeave } =
    useDragAndDrop("ListColumn", "List");

  //filter tasks based on filtered users
  let tasksFilteredByUsers = [];
  if (tasks.length > 0) {
    const noFilters = filteredUsers.length === 0;
    if (noFilters) {
      tasksFilteredByUsers = tasks;
    } else {
      tasksFilteredByUsers = tasks.filter((task) =>
        task.assignedUsers.some((user) => filteredUsers.includes(user))
      );
    }
  }

  return (
    <section
      id="ListColumn"
      className={styles.listContainer}
      onDragOver={(e) => handleDragOver(e, "ListColumn")}
      onDragLeave={handleDragLeave}
      onDrop={handleDragEnd}
    >
      {tasksFilteredByUsers.map((task) => (
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
