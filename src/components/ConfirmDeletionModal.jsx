import React, { useState } from "react";
import styles from "../styling/Column.module.css";
import { useDispatch } from "react-redux";
import { removeColumn } from "../features/columns/columnSlice";

const ConfirmDeletionModal = ({ setShowModal, columnId }) => {
  const [keepTasks, setKeepTasks] = useState(false);
  const dispatch = useDispatch();
  const handleConfirmDelete = () => {
    dispatch(removeColumn(columnId));
    setShowModal(false);
  };

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
