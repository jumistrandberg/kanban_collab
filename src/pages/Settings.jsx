import React, { useState } from "react";
import styles from "../styling/Setting.module.css";

const Settings = () => {
  const [headerColor, setHeaderColor] = useState("");
  const [headerTextColor, setHeaderTextColor] = useState("");
  const [columnColor, setColumnColor] = useState("");
  const [columnTextColor, setColumnTextColor] = useState("");
  const [popupColor, setPopupColor] = useState("");
  const [popupTextColor, setPopupTextColor] = useState("");
  const [backgroundimg, setBackgroundimg] = useState("");

  return (
    <>
      <form>
        <div className={styles.settingItemContainer}>
          <div className={styles.settingsItem}>
            <label htmlFor="Header">Header and footer</label>
            <input id="Header" value="" type="color" />
          </div>
          <div className={styles.settingsItem}>
            <label htmlFor="headerText">Header and footer Text Color</label>
            <input id="headerText" value="" type="color" />
          </div>
        </div>
        <div className={styles.settingItemContainer}>
          <div className={styles.settingsItem}>
            <label htmlFor="Header">Column color</label>
            <input id="Header" value="#ffffff" type="color" />
          </div>
          <div className={styles.settingsItem}>
            <label htmlFor="Header">Column color TEXT</label>
            <input id="Header" value="#ffffff" type="color" />
          </div>
        </div>
        <div className={styles.settingItemContainer}>
          <div className={styles.settingsItem}>
            <label htmlFor="Header">Popup Color</label>
            <input id="Header" value="#ffffff" type="color" />
          </div>
          <div className={styles.settingsItem}>
            <label htmlFor="Header">Popup Color TEXT</label>
            <input id="Header" value="#ffffff" type="color" />
          </div>
        </div>
        <div className={styles.settingItemContainer}>
          <div className={styles.settingsItem}>
            background img
            <input type="file" />
          </div>
        </div>

        <div className={styles.settingItemContainer}>
          <input type="submit" />
        </div>
      </form>

      <div className={styles.settingItemContainer}>
        <div className={styles.settingsItem}>
          <h4>delete users</h4>
          <input type="checkbox" />
          <label>user 1</label>
        </div>
      </div>
    </>
  );
};

// background img

// column color

// popup/task background color and text

// font-family

// header and footer color

// delete user
export default Settings;
