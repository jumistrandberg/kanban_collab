import React, { useEffect, useState } from "react";
import styles from "../styling/Setting.module.css";
import useChangeSettings from "../customHooks/useChangeSettings";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../features/users/usersSlice.jsx";

const Settings = () => {
  const allUsers = useSelector((state) => state.allUsersReducer.users);
  const dispatch = useDispatch();

  const [activeUser, setActiveUser] = useState(
    allUsers.find((user) => user.userActive)
  );
  const [headerColor, setHeaderColor] = useState("");
  const [headerTextColor, setHeaderTextColor] = useState("");
  const [columnColor, setColumnColor] = useState("");
  const [columnTextColor, setColumnTextColor] = useState("");
  const [popupColor, setPopupColor] = useState("");
  const [popupTextColor, setPopupTextColor] = useState("");
  const [backgroundimg, setBackgroundimg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const settings = {
      //Header includes Footer
      header: headerColor,
      headerText: headerTextColor,
      column: columnColor,
      columnText: columnTextColor,
      popup: popupColor,
      popupText: popupTextColor,
      background: backgroundimg,
    };
    setActiveUser((prev) => ({ ...prev, settings: settings }));
  };
  useEffect(() => {
    dispatch(updateUser(activeUser));
  }, [activeUser]);

  return (
    <>
      <form>
        <div
          className={styles.settingItemContainer}
          style={{ backgroundColor: headerColor }}
        >
          <div className={styles.settingsItem}>
            <label htmlFor="Header">Header and footer</label>
            <input
              onChange={(e) => useChangeSettings(e, setHeaderColor)}
              id="Header"
              value={headerColor}
              type="color"
            />
          </div>
          <div className={styles.settingsItem}>
            <label htmlFor="headerText">Header and footer Text Color</label>
            <input
              id="headerText"
              value={headerTextColor}
              type="color"
              onChange={(e) => useChangeSettings(e, setHeaderTextColor)}
            />
          </div>
        </div>
        <div className={styles.settingItemContainer}>
          <div className={styles.settingsItem}>
            <label htmlFor="Header">Column color</label>
            <input
              onChange={(e) => useChangeSettings(e, setColumnColor)}
              id="ColumnColor"
              value={columnColor}
              type="color"
            />
          </div>
          <div className={styles.settingsItem}>
            <label htmlFor="Header">Column color TEXT</label>
            <input
              onChange={(e) => useChangeSettings(e, setColumnTextColor)}
              id="ColumnTextColor"
              value={columnTextColor}
              type="color"
            />
          </div>
        </div>
        <div className={styles.settingItemContainer}>
          <div className={styles.settingsItem}>
            <label htmlFor="Header">Popup Color</label>
            <input
              onChange={(e) => useChangeSettings(e, setPopupColor)}
              id="PopupColor"
              value={popupColor}
              type="color"
            />
          </div>
          <div className={styles.settingsItem}>
            <label htmlFor="Header">Popup Color TEXT</label>
            <input
              onChange={(e) => useChangeSettings(e, setPopupTextColor)}
              id="PopupTextColor"
              value={popupTextColor}
              type="color"
            />
          </div>
        </div>
        <div className={styles.settingItemContainer}>
          <div className={styles.setBackground}>
            background img
            <input type="file" />
          </div>
        </div>

        <div className={styles.settingItemContainer}>
          <input onClick={handleSubmit} type="submit" />
        </div>
      </form>

      <div className={styles.settingItemContainer}>
        <div className={styles.deleteUser}>
          <button onClick={() => dispatch(deleteUser(activeUser.id))}>
            Delete this user
          </button>
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
