import React from "react";
import "../styling/Footer.module.css";
import styles from "../styling/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; 2024 kanban footer</p>
        <ul className={styles.footerLinks}>
          <li>
            <a href="*"></a>Home
          </li>
          <li>
            <a href="*"></a>About
          </li>
          <li>
            <a href="*"></a>Settings
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
