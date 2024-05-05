import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Filter from "./Filter";
import useActiveUser from "../customHooks/useActiveUser";

//icons
import { FcAddDatabase } from "react-icons/fc";
import { FcSettings } from "react-icons/fc";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PiListBold } from "react-icons/pi";
import { HiOutlineViewColumns } from "react-icons/hi2";

//styling
import styles from "../styling/Header.module.css";

//components
import AddUserModal from "../features/modal/AddUserModal";
import UsersList from "../features/users/UsersList";

const Header = () => {
  const activeUser = useActiveUser();
  const [isFilterShown, setIsFilterShown] = useState(false);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const location = useLocation();
  const tasks = useSelector((state) => state.allTaskReducer.tasks);
  const users = useSelector((state) => state.allUsersReducer.users);
  //filteredUsers is the same for all tasks and therefore can tasks[0] be used
  const filteredUsers = tasks.length > 0 ? tasks[0].filteredUsers : [];

  //get filtered userNames from id
  const filteredUserNames = users
    .filter((user) => filteredUsers.includes(user.id))
    .map((user) => user.userUserName)
    .join(", ");

  const OpenAddUserModal = () => {
    setShowAddUserModal(true);
  };

  const handleCloseAddUserWindow = () => {
    setShowAddUserModal(false);
  };

  const handleToggleFilter = () => {
    setIsFilterShown(!isFilterShown);
  };

  const closeFilter = () => {
    setIsFilterShown(false);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
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

      <div className={styles.subHeader}>
        <div className={styles.toolsDiv}>
          <div className={styles.vueBtnDiv}>
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? styles.activeButton
                  : styles.viewButtons
              }
            >
              Board <HiOutlineViewColumns />
            </Link>
            <Link
              to="/list"
              className={
                location.pathname === "/list"
                  ? styles.activeButton
                  : styles.viewButtons
              }
            >
              List <PiListBold />
            </Link>
          </div>

          <div className={styles.filter_container}>
            <button
              className={styles.buttons + " " + styles.filterBtn}
              onClick={handleToggleFilter}
            >
              Filter <MdOutlineKeyboardArrowDown />
            </button>
            {isFilterShown && <Filter />}
          </div>

          {showAddUserModal && (
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
        {filteredUsers.length > 0 ? (
          <div className={styles.filtered_Users}>
            <h4>
              Filtered Users: <span>{filteredUserNames}</span>
            </h4>
          </div>
        ) : null}
      </div>
      {isFilterShown && (
        <div className={styles.overlay} onClick={closeFilter}></div>
      )}
    </header>
  );
};

export default Header;
