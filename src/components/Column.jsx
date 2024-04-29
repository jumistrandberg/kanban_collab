import { React, useState } from "react";
import Task from "./Task";
import AddTask from "./AddTask";
import styles from "../styling/Column.module.css";
import useDragAndDrop from "../customHooks/useDragAndDrop";

import { useSelector, useDispatch } from "react-redux";
import { setTasks } from "../features/tasks/taskSlice";

import { MdOutlineDeleteForever as DeleteBtn } from "react-icons/md";
import ConfirmDeletionModal from "./ConfirmDeletionModal";
import DropIndicator from "./DropIndicator";

import useActiveUser from "../customHooks/useActiveUser";

const Column = ({ columnId, title }) => {
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState(false);
  const tasks = useSelector((state) => state.allTaskReducer.tasks);
  const activeUser = useActiveUser();
  const dispatch = useDispatch();

  const ConfirmDeletion = () => {
    setShowModal(true);
  };

  const { handleDragStart, handleDragEnd, handleDragOver, handleDragLeave } =
    useDragAndDrop(columnId, "Board", setActive);

  // filter tasks based on the columnId
  const filteredTasks = tasks.filter((task) => task.atColumnId === columnId);

  return (
    // change class for column highlight when dragging over
    <section
      style={{ backgroundColor: activeUser.settings.column }}
      className={!active ? "column" : "active-column"}
      onDragOver={(e) => handleDragOver(e, columnId)}
      onDragLeave={handleDragLeave}
      onDrop={handleDragEnd}
    >
      <div className={styles.column}>
        <div className={styles.titleContainer}>
          <h2
            className={styles.title}
            style={{ color: activeUser.settings.columnText }}
          >
            {title}
          </h2>
          <DeleteBtn className={styles.delete} onClick={ConfirmDeletion} />
        </div>
        {filteredTasks.map((task) => {
          return (
            <Task
              columnId={columnId}
              handleDragStart={handleDragStart}
              key={task.id}
              task={task}
            />
          );
        })}
        <DropIndicator beforeTaskId={null} columnId={columnId} />
        <AddTask columnId={columnId} />
        {showModal && (
          <ConfirmDeletionModal
            setShowModal={setShowModal}
            columnId={columnId}
            tasks={tasks}
          />
        )}
      </div>
    </section>
  );
};

export default Column;
