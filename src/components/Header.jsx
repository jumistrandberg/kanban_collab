import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";

import styles from "../styling/Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.logoSettingsDiv}>
        <Link to="/" className="link">
          <h1>KanBan App</h1>
        </Link>
        <Link to="/settings" className="link">
          <IoMdSettings className={styles.settingsBtn} role="button" />
        </Link>
      </div>
      <div className={styles.toolsDiv}>
        <div className={styles.vueBtnDiv}>
          <Link to="/">
            <button className={styles.vueBtn}>Board</button>
          </Link>
          <Link to="/list">
            <button className={styles.vueBtn}>List</button>
          </Link>
        </div>
        <select name="filter" id="filter" className={styles.filter}>
          <option value="">Filter</option>
        </select>
        <div className={styles.avatarDiv}>
          <CiCirclePlus className={styles.addUserBtn} role="button" />
          <RxAvatar className={styles.activeUser} role="button" />
          <RxAvatar className={styles.userAvatar} role="button" />
          <RxAvatar className={styles.userAvatar} role="button" />
          <RxAvatar className={styles.userAvatar} role="button" />
        </div>
      </div>
    </header>
  );
};

export default Header;
