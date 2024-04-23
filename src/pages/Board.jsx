import { useState } from "react";
import Column from "../components/Column";
import styles from "../styling/Board.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addColumn } from "../features/columns/columnSlice";

const Board = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.allColumnReducer.columns);

  const [newTitle, setNewTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendColumn = {
      title: newTitle,
      atBoardIndex: 0,
    };

    dispatch(addColumn(sendColumn));
    setNewTitle("");
  };

  return (
    <section>
      <h2>Board name</h2>
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

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id=""
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />

        <button type="submit">Add Column</button>
      </form>
    </section>
  );
};

export default Board;
