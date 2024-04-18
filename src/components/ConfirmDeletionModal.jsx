import React, { useState } from "react";
import styles from "../styling/Column.module.css";

const ConfirmDeletionModal = () => {
  return (
    <>
      <div className={styles.modalContainer}>
        <div className={styles.deletionModal}>
          Delete column?
          <form action=""></form>
        </div>
      </div>
    </>
  );
};

export default ConfirmDeletionModal;
