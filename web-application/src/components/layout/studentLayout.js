import React from "react";
import { Outlet } from "react-router-dom";

import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import StudentSidebar from "../sidebar/studentSidebar";
import Navbar from "../navbar/navbar";

import { useDispatch } from "react-redux";

const StudentLayout = () => {
  const dispatch = useDispatch();
  let params = useParams();
  const navigate = useNavigate();

  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [studentID, setStudentID] = useState("");

  // Handling Login Logics

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/student/login");
      }
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/student/me",
        {},
        { withCredentials: true }
      );
      const { status, user, studentID } = data;
      dispatch({ type: "student/add", payload: data });

      return status
        ? toast(`Welcome back ! ${studentID} or should i say ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/student/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/student/login");
  };

  return (
    <>
      <div className="container">
        <ToastContainer />
        <div className="wrapper">
          <StudentSidebar />
          <div className="main">
            <Navbar logout={Logout} />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentLayout;
