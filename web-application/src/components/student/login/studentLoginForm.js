import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StudentLoginForm = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    studentID: "",
    password: "",
  });
  const { studentID, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const handleError = (err) =>
    toast.error(err, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleSubmit = async (e) => {
    console.log("Submit");
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/student/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/student/dashboard");
        }, 500);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="container">
      <ToastContainer />

      <div className="auth">
        <div className="auth-left-container">
          <div className="auth-left">
            <div className="greeting-container">
              <h2 id="greetings">Welcome To P.N Academy</h2>
              <div className="big-logo">
                <img src="/images/school-logo.jpeg" alt=""></img>
              </div>
            </div>
          </div>
        </div>
        <div className="auth-right-container">
          <div className="auth-right">
            <h4 id="student-signIn">Sign In As A Student</h4>
            <form action="post" onSubmit={handleSubmit} className="form login-form">
              <input
                type="text"
                name="studentID"
                value={studentID}
                placeholder="Enter Your Student ID.  "
                onChange={handleOnChange}
              ></input>
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                value={password}
                onChange={handleOnChange}
              ></input>
              <button type="submit" className="btn lgn-btn">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLoginForm;
