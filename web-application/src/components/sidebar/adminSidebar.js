import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  const pathname = window.location.pathname;
  let paths = pathname.split("/");
  let activeOption = paths[2] || "dashboard";

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
            <Link to={"/admin/dashboard"} className="sidebar-option">
              Dashboard
            </Link>
          </div>
          <div
            className={`sidebar-btn-container ${
              activeOption == "class" ? "active-btn" : ""
            } `}
          >
            <object data="/icons/class.svg"></object>
            <Link to={"/admin/class"} className="sidebar-option">
              Class
            </Link>
          </div>
          <div
            className={`sidebar-btn-container ${
              activeOption == "student" ? "active-btn" : ""
            } `}
          >
            <object data="/icons/students.svg"></object>
            <Link to={"/admin/student"} className="sidebar-option">
              Student
            </Link>
          </div>
          <div
            className={`sidebar-btn-container ${
              activeOption == "fee" ? "active-btn" : ""
            } `}
          >
            <object data="/icons/feeStructure.svg"></object>
            <Link to={"/admin/fee"} className="sidebar-option">
              Fee
            </Link>
          </div>
          <div
            className={`sidebar-btn-container ${
              activeOption == "billing" ? "active-btn" : ""
            } `}
          >
            <object data="/icons/billing.svg"></object>
            <Link to={"/admin/billing"} className="sidebar-option">
              Billing
            </Link>
          </div>
          <div
            className={`sidebar-btn-container ${
              activeOption == "setting" ? "active-btn" : ""
            } `}
          >
            <object data="/icons/setting.svg"></object>
            <Link to={"/admin/setting"} className="sidebar-option">
              Settings
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
