import React from "react";

const AdminLoginForm = () => {
  return (
    <div className="container">
      <div class="auth">
        <div class="auth-left-container">
          <div class="auth-left">
            <div class="greeting-container">
              <h2 id="greetings">Welcome To P.N Academy</h2>
              <div class="big-logo">
                <img src="/images/school-logo.jpeg" alt=""></img>
              </div>
            </div>
          </div>
        </div>
        <div class="auth-right-container">
          <div class="auth-right">
            <h4 id="student-signIn">Sign In As An Admin</h4>
            <form action="post" class="form login-form">
              <input type="tel" placeholder="Mobile Number"></input>
              <input type="password" placeholder="Password"></input>
              <button type="submit" class="btn lgn-btn">
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
