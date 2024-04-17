import { NavLink } from "react-router-dom";

import styles from "../styling/Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <ul className={styles.footerLinks}>
          <li>
            <NavLink className={styles.active} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.active} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.active} to="/settings">
              Settings
            </NavLink>
          </li>
        </ul>
        <p>&copy; {currentYear} Kanban App</p>
      </div>
    </footer>
  );
};

export default Footer;
