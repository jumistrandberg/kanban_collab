import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { IoMdSettings } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo_settings_div">
        <h1>KanBan App</h1>
        <IoMdSettings className="settings_btn" role="button" />
      </div>
      <div className="tools_div">
        <div className="tools_vue_div">
          <button className="tools_vue_btn">Board</button>
          <NavLink to="/list">
            <button className="tools_vue_btn">List</button>
          </NavLink>
        </div>
        <select name="filter" id="filter">
          <option value="">Filter</option>
        </select>
        <div className="user_avatar_div">
          <CiCirclePlus className="add_user_btn" role="button" />
          <RxAvatar className="user_avatar active_user" role="button" />
          <RxAvatar className="user_avatar" role="button" />
          <RxAvatar className="user_avatar" role="button" />
          <RxAvatar className="user_avatar" role="button" />
        </div>
      </div>
    </header>
  );
};

export default Header;
