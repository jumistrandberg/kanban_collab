import React from "react";
import Column from "../components/Column";
import styles from "../styling/Board.module.css";

const Board = () => {
  return (
    <section>
      <h2>Board name</h2>
      <div className={styles.boardContainer}>
        <Column />
        <Column />
        <Column />
      </div>
    </section>
  );
};

export default Board;
