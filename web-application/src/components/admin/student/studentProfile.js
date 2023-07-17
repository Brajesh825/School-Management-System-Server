import React from "react";

const StudentProfile = ({ student }) => {
  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  let gender = student.gender;
  var dateParts = student.dob.split("/");
  let dob = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
  let age = calculate_age(dob);
  let about = student.about || "no content";
  let name = student.name;
  let avatar = student.image || "";
  let sclass = student.class;
  let sID = student.studentID;

  return (
    <div class="student-profile">
      <div class="main-student-profile">
        <div class="student-id">
          <p>{sID}</p>
        </div>
        <div class="student-profile-wrapper">
          <img width="200" height="200" src={avatar} alt="profile pic"></img>
        </div>
        <div class="student-card">
          <p>{name}</p>
          <p>{sclass}</p>
        </div>
      </div>
      <div class="student-about">
        <h3>About</h3>
        <p>{about}</p>
      </div>
      <div class="student-misc">
        <div class="student-age">
          <h3>Age</h3>
          <p>{age}</p>
        </div>
        <div class="student-gender">
          <h3>Gender</h3>
          <p>{gender}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
