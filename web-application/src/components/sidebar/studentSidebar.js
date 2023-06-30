import React from "react";
import { Link } from "react-router-dom";

const StudentSidebar = () => {
  const pathname = window.location.pathname;
  let paths = pathname.split("/");
  let activeOption = paths[paths.length - 1];

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-top">
          <div className="small-logo">
            <img src="/images/school-logo.jpeg" alt=""></img>
          </div>
          <h2 id="greetings-small">P.N Academy</h2>
        </div>
        <div className="sidebar-bottom">
          <div
            className={`sidebar-btn-container ${
              activeOption == "dashboard" ? "active-btn" : ""
            } `}
          >
            <object data="/icons/dashboard.svg"></object>
            <Link to={"/student/dashboard"} className="sidebar-option">
              Dashboard
            </Link>
          </div>
          <div
            className={`sidebar-btn-container ${
              activeOption == "billing" ? "active-btn" : ""
            } `}
          >
            <object data="/icons/billing.svg"></object>
            <Link to={"/student/billing"} className="sidebar-option">
              Billing
            </Link>
          </div>
          <div
            className={`sidebar-btn-container ${
              activeOption == "setting" ? "active-btn" : ""
            } `}
          >
            <object data="/icons/setting.svg"></object>
            <Link to={"/student/setting"} className="sidebar-option">
              Settings
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentSidebar;
