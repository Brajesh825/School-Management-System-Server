import React from "react";

const StudentDashboard = () => {
  return (
    <div class="dashboard-main">
      <div class="dash-action-container">
        <h2>Welcome to your dashboard , P.N Academy</h2>
        <div class="main-faculty">
          <div class="faculty-container">
            <img src="/images/director.jpeg" alt=""></img>
            <span>Dr. Ashok Tiwari </span>
            <span class="title">Director</span>
          </div>
          <div class="faculty-container">
            <img src="/images/principle.jpeg" alt=""></img>
            <span>Mr Lama</span>
            <span class="title">Principle</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
