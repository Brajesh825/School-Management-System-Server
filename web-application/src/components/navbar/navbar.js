import React from "react";

const Navbar = ({ user, studentID, logout }) => {
  return (
    <div class="navbar dashboard-nav">
      <div class="dashboard-welcome"></div>
      <div class="dashboard-nav-btn-wrapper">
        <span className="user-welcome" >
          <span className="name" >{user}</span>
          <span className="_id" >{studentID}</span>
        </span>
        <button onClick={logout} className="logout-btn">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
