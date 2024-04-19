import React, { useState } from "react";
import styles from "../styling/Column.module.css";
import { useDispatch } from "react-redux";
import { removeTask } from "../features/tasks/taskSlice";
import { removeColumn } from "../features/columns/columnSlice";

const ConfirmDeletionModal = ({ setShowModal, columnId, tasks }) => {
  const [keepTasks, setKeepTasks] = useState(false);
  const dispatch = useDispatch();

  //Filters tasks in column and sends them to the task slice for deletion
  const handleConfirmDelete = () => {
    dispatch(removeColumn(columnId));
    setShowModal(false);
    const tasksToDelete = tasks.filter((task) => task.atColumnId === columnId);
    tasksToDelete.forEach((task) => {
      dispatch(removeTask(task.id));
    });
  };

  //Changes state based on checkbox
  const handleCheckboxClick = (event) => {
    setKeepTasks(event.target.checked);
  };

  const handleCloseModalWindow = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className={styles.modalContainer}>
        <div className={styles.deletionModal}>
          Delete column?
          <form action="">
            <input
              className={styles.modalCheckbox}
              type="checkbox"
              name="KeepTasks"
              id="KeepTasks"
              checked={keepTasks}
              onChange={handleCheckboxClick}
            />
            <label>Keep Tasks?</label>
          </form>
          <div className={styles.modalButtonContainer}>
            <button
              onClick={handleConfirmDelete}
              className={styles.modalButton}
            >
              Confirm
            </button>
            <button
              onClick={handleCloseModalWindow}
              className={styles.modalButton}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmDeletionModal;
