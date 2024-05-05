import { useState } from "react";
import Column from "../components/Column";
import styles from "../styling/Board.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addColumn } from "../features/columns/columnSlice";
import { MdAddBox } from "react-icons/md";

const Board = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.allColumnReducer.columns);

  const [newTitle, setNewTitle] = useState("");
  const [AddColumnVisible, setAddColumnVisible] = useState(false);
  const [PlusIconVisible, setPlusIconVisible] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendColumn = {
      title: newTitle,
      atBoardIndex: 0,
    };

    dispatch(addColumn(sendColumn));
    setAddColumnVisible(false);
    setPlusIconVisible(true);
    setNewTitle("");
  };

  const toggleAddColumn = () => {
    setAddColumnVisible(!AddColumnVisible);
    setPlusIconVisible(false);
  };

  return (
    <section>
      <div className={styles.boardContainer}>
        {columns.map((column, index) => (
          <Column
            key={column.id}
            columnId={column.id}
            columnIndex={index}
            title={column.title}
          />
        ))}
      </div>

      {PlusIconVisible && (
        <div className={styles.PlusIconContainer}>
          <MdAddBox className={styles.PlusIcon} onClick={toggleAddColumn} />
        </div>
      )}

      <div className={styles.AddColumnContainer}>
        {AddColumnVisible && (
          <form onSubmit={handleSubmit} className={styles.AddColumn}>
            <input
              type="text"
              id=""
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />

            <button type="submit" className={styles.AddBtn}>
              Add Column
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Board;
