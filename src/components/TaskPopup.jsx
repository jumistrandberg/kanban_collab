import { useState } from "react";
import { MdClose } from "react-icons/md";
import styles from "../styling/TaskPopup.module.css";
import { useDispatch } from "react-redux";
import { updateTaskDetails, removeTask } from "../features/tasks/taskSlice";

const TaskPopup = ({ task, onClose }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSaveChanges = () => {
    dispatch(updateTaskDetails({ id: task.id, title, description }));
    onClose();
  };

  const handleDeleteTask = () => {
    dispatch(removeTask(task.id));
    onClose();
  };

  return (
    <div className={styles.TaskPopupContainer}>
      <div className={styles.Overlay}></div>
      <div className={styles.Popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.CloseBtn} onClick={handleClose}>
          <MdClose />
        </button>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          className={styles.TitleInput}
        />
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          className={styles.DescriptionInput}
        ></textarea>
        <button className={styles.SaveBtn} onClick={handleSaveChanges}>
          Save Changes
        </button>
        <button className={styles.DeleteBtn} onClick={handleDeleteTask}>
          Delete Task
        </button>
      </div>
    </div>
  );
};

export default TaskPopup;
