import React from "react";
import { Outlet } from "react-router-dom";

import { useParams } from "react-router";

import StudentSidebar from "../sidebar/studentSidebar";
import Navbar from "../navbar/navbar";

const StudentLayout = () => {
  let params = useParams();

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <StudentSidebar />
          <div className="main">
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentLayout;