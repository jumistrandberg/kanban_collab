import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
//need column index as a prop
const AddTask = () => {
  const task = useSelector((state) => state.allTaskReducer);
  const dispatch = useDispatch();

  const [newTitle, setNewTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendTask = {
      title: newTitle,
      atColumnIndex: 4,
    };

    dispatch(addTask(sendTask));
    setNewTitle("");
    console.log(task);
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
