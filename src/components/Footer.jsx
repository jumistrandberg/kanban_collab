import styles from "../styling/Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
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
        <p>&copy; {currentYear} Kanban App</p>
      </div>
    </footer>
  );
};

export default Footer;
