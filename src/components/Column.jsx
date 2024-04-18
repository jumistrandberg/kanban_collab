import { React, useState } from "react";
import Task from "./Task";
import AddTask from "./AddTask";
import styles from "../styling/Column.module.css";
import { useSelector } from "react-redux";
import { MdOutlineDeleteForever as DeleteBtn } from "react-icons/md";
import ConfirmDeletionModal from "./ConfirmDeletionModal";
import TaskPopup from "./TaskPopup";

const Column = ({ id, columnIndex, title }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const tasks = useSelector((state) => state.allTaskReducer.tasks);

  const ConfirmDeletion = () => {
    setShowModal(true);
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const handleCloseTaskPopup = () => {
    setSelectedTask(null);
  };

  return (
    <div className={styles.column}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{title}</h2>
        <DeleteBtn className={styles.delete} onClick={ConfirmDeletion} />
      </div>
      {tasks.map((task) =>
        task.atColumnIndex === columnIndex ? (
          <Task
            key={task.id}
            task={task}
            onClick={() => handleTaskClick(task)}
          />
        ) : null
      )}
      <AddTask columnIndex={columnIndex} />
      {showModal && (
        <ConfirmDeletionModal
          setShowModal={setShowModal}
          columnId={id}
          tasks={tasks}
          columnIndex={columnIndex}
        />
      )}
      {selectedTask && (
        <TaskPopup task={selectedTask} onClose={handleCloseTaskPopup} />
      )}
    </div>
  );
};

export default Column;
