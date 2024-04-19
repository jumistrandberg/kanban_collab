import { React, useState } from "react";
import Task from "./Task";
import AddTask from "./AddTask";
import styles from "../styling/Column.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeColumn } from "../features/columns/columnSlice";
import { MdOutlineDeleteForever as DeleteBtn } from "react-icons/md";
import ConfirmDeletionModal from "./ConfirmDeletionModal";

const Column = ({ columnId, columnIndex, title }) => {
  const [showModal, setShowModal] = useState(false);
  const tasks = useSelector((state) => state.allTaskReducer.tasks);
  const dispatch = useDispatch();
  const ConfirmDeltion = () => {
    setShowModal(true);
  };
  return (
    <div className={styles.column}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{title}</h2>
        <DeleteBtn
          className={styles.delete}
          onClick={() => dispatch(removeColumn(columnId))}
          // onClick={ConfirmDeltion}
        />
      </div>
      {tasks.map((task) =>
        task.atColumnId === columnId ? <Task key={task.id} task={task} /> : null
      )}
      <AddTask columnId={columnId} />
      {/* {showModal && <ConfirmDeletionModal />} */}
    </div>
  );
};

export default Column;
