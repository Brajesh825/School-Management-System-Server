import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLoginForm = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    mobile: "",
    password: "",
  });
  const { mobile, password } = inputValue;
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
        "http://localhost:4000/api/v1/authority/login",
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
          navigate("/admin/dashboard");
        }, 500);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      mobile: "",
      password: "",
    });
  };

  return (
    <div className="container">
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
            <h4 id="student-signIn">Sign In As An Admin</h4>
            <form
              action="post"
              onSubmit={handleSubmit}
              className="form login-form"
            >
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                onChange={handleOnChange}
                value={inputValue.mobile}
              ></input>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleOnChange}
                value={inputValue.password}
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

export default AdminLoginForm;
