import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

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
import Filter from "./Filter";

const Header = () => {
  const [showAddUserMoal, setShowAddUserModal] = useState(false);
  const [isFilterShown, setIsFilterShown] = useState(false);
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

  return (
    <header>
      <div className={styles.logoSettingsDiv}>
        <Link to="/" className="link">
          <h1>KanBan App</h1>
        </Link>
        <Link to="/settings" className="link">
          <FcSettings className={styles.settingsBtn} role="button" />
        </Link>
      </div>

      <div className={styles.subHeader}>
        <div className={styles.toolsDiv}>
          <div className={styles.vueBtnDiv}>
            <NavLink to="/" className={styles.button_links}>
              <button className={styles.buttons}>
                Board <HiOutlineViewColumns />
              </button>
            </NavLink>
            <NavLink to="/list" className={styles.button_links}>
              <button className={styles.buttons}>
                List <PiListBold />
              </button>
            </NavLink>
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
        {filteredUsers.length > 0 ? (
          <div className={styles.filtered_Users}>
            <h4>
              Filtered Users: <span>{filteredUserNames}</span>
            </h4>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
