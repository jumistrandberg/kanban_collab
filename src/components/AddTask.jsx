import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { setFilteredUsers } from "../features/tasks/taskSlice";
import styles from "../styling/Column.module.css";

const AddTask = ({ columnId }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.allTaskReducer.tasks);
  const filteredUsers = tasks.length > 0 ? tasks[0].filteredUsers : [];
  const [newTitle, setNewTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //If there are filters remove them before adding new task
    if (filteredUsers.length > 0) {
      alert("Adding a new task will reset active filters");
      dispatch(setFilteredUsers([]));
    }

    const sendTask = {
      title: newTitle,
      atColumnId: columnId,
      filteredUsers: [],
    };

    dispatch(addTask(sendTask));
    setNewTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.addTask_form}>
      <input
        className={styles.addTask_input}
        type="text"
        id=""
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />

      <button type="submit" className={styles.addTask_btn}>
        Add task
      </button>
    </form>
  );
};

export default AddTask;
