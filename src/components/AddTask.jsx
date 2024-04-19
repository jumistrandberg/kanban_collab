import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
//need column index as a prop
const AddTask = ({ columnId }) => {
  const dispatch = useDispatch();

  const [newTitle, setNewTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendTask = {
      title: newTitle,
      atColumnId: columnId,
    };

    dispatch(addTask(sendTask));
    setNewTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id=""
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />

      <button type="submit">Add task</button>
    </form>
  );
};

export default AddTask;
