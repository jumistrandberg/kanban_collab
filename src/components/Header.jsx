import React, { useEffect, useState } from "react";
import { FcAddDatabase } from "react-icons/fc";
import { FcSettings } from "react-icons/fc";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import styles from "../styling/Header.module.css";

import AddUserModal from "../features/modal/AddUserModal";
import UsersList from "../features/users/UsersList";
import useActiveUser from "../customHooks/useActiveUser";

const Header = () => {
  const activeUser = useActiveUser();
  // console.log(activeUser);
  const [showAddUserMoal, setShowAddUserModal] = useState(false);

  const OpenAddUserModal = () => {
    setShowAddUserModal(true);
  };

  const handleCloseAddUserWindow = () => {
    setShowAddUserModal(false);
  };

  return (
    <header>
      <div
        className={styles.logoSettingsDiv}
        style={{
          backgroundColor: activeUser.settings.header,
        }}
      >
        <Link to="/" className="link">
          <h1 style={{ color: activeUser.settings.headerText }}>KanBan App</h1>
        </Link>
        <Link to="/settings" className="link">
          <FcSettings className={styles.settingsBtn} role="button" />
        </Link>
      </div>

      <div className={styles.toolsDiv}>
        <div className={styles.vueBtnDiv}>
          <NavLink to="/">
            <button className={styles.vueBtn}>Board</button>
          </NavLink>
          <NavLink to="/list">
            <button className={styles.vueBtn}>List</button>
          </NavLink>
        </div>
        <select name="filter" id="filter" className={styles.filter}>
          <option value="">Filter</option>
        </select>
        {showAddUserMoal && (
          <AddUserModal handleCloseAddUserWindow={handleCloseAddUserWindow} />
        )}
        <div className={styles.avatarDiv}>
          <FcAddDatabase
            className={styles.addUserBtn}
            role="button"
            onClick={OpenAddUserModal}
          />
          <UsersList />
        </div>
      </div>
    </header>
  );
};

export default Header;
