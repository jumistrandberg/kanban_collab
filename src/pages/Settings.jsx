import React, { useEffect, useState } from "react";
import styles from "../styling/Setting.module.css";
import useChangeSettings from "../customHooks/useChangeSettings";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../features/users/usersSlice.jsx";
import useActiveUser from "../customHooks/useActiveUser.js";

const Settings = () => {
  const activeUser = useSelector((state) =>
    state.allUsersReducer.users.find((u) => u.userActive)
  );
  const dispatch = useDispatch();

  const [updateUsers, setUpdateUsers] = useState(activeUser);
  const [headerColor, setHeaderColor] = useState(activeUser.settings.header);
  const [headerTextColor, setHeaderTextColor] = useState(
    updateUsers.settings.headerText
  );
  const [columnColor, setColumnColor] = useState(activeUser.settings.column);
  const [columnTextColor, setColumnTextColor] = useState(
    activeUser.settings.columnText
  );
  const [popupColor, setPopupColor] = useState(activeUser.settings.popup);
  const [popupTextColor, setPopupTextColor] = useState(
    activeUser.settings.popupText
  );
  const [backgroundimg, setBackgroundimg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUpdateUsers(activeUser);
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
    setUpdateUsers((prev) => ({ ...prev, settings: settings }));
  };
  useEffect(() => {
    dispatch(updateUser(updateUsers));
  }, [updateUsers]);

  useEffect(() => {
    setUpdateUsers(activeUser);
    setHeaderColor(activeUser.settings.header);
    setHeaderTextColor(activeUser.settings.headerText);
    setColumnColor(activeUser.settings.column);
    setColumnTextColor(activeUser.settings.columnText);
    setPopupColor(activeUser.settings.popup);
    setPopupTextColor(activeUser.settings.popupText);
  }, [activeUser]);

  return (
    <>
      <form>
        <div className={styles.settingItemContainer}>
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
            <label htmlFor="ColumnColor">Column color</label>
            <input
              onChange={(e) => useChangeSettings(e, setColumnColor)}
              id="ColumnColor"
              value={columnColor}
              type="color"
            />
          </div>
          <div className={styles.settingsItem}>
            <label htmlFor="ColumnTextColor">Column color TEXT</label>
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
            <label htmlFor="PopupColor">Popup Color</label>
            <input
              onChange={(e) => useChangeSettings(e, setPopupColor)}
              id="PopupColor"
              value={popupColor}
              type="color"
            />
          </div>
          <div className={styles.settingsItem}>
            <label htmlFor="PopupTextColor">Popup Color TEXT</label>
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
            <input type="file" value={"choose file"} />
          </div>
        </div>

        <div className={styles.settingItemContainer}>
          <input onClick={handleSubmit} type="submit" value={"submit"}/>
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

export default Settings;
