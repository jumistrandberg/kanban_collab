import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { IoMdSettings } from "react-icons/io";

const Header = () => {
  return (
    <header>
      <div className="logo_settings_div">
        <h1>KanBan App</h1>
        <button className="settings_btn">
          <IoMdSettings />
        </button>
      </div>
      <div className="tools_div">
        <div className="tools_vue_div">
          <button className="tools_vue_btn">Board</button>
          <button className="tools_vue_btn">List</button>
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
