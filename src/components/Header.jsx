import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { IoMdSettings } from "react-icons/io";

import { Link, NavLink } from "react-router-dom";
import styles from "../styling/Header.module.css";

import AddUserModal from "../features/modal/AddUserModal";

const Header = () => {

  const [showAddUserMoal, setShowAddUserModal] = useState(false)

  const OpenAddUserModal = () => {
    setShowAddUserModal(true)
  }

  const handleConfirmAddUser = () => {
    console.log('test1')
  }

  const handleCloseAddUserWindow = () => {
    console.log('close')
    setShowAddUserModal(false)
    
  }

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
            <AddUserModal 
              handleConfirmAddUser={handleConfirmAddUser}
              handleCloseAddUserWindow={handleCloseAddUserWindow}
            />
        )}
        <div className={styles.avatarDiv}>
          <CiCirclePlus className={styles.addUserBtn} role="button" onClick={OpenAddUserModal}/>
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
