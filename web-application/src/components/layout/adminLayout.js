import React from "react";
import { Outlet } from "react-router-dom";

import { useParams } from "react-router";

import AdminSidebar from "../sidebar/adminSidebar";
import Navbar from "../navbar/navbar";

const AdminLayout = () => {
  let params = useParams();
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <AdminSidebar />
          <div className="main">
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
