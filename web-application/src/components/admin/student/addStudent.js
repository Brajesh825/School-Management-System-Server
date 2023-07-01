import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const AddStudent = (data) => {
  const { addStudent } = useOutletContext();
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    var object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    addStudent(object);
    navigate("/admin/student");
  };

  return (
    <div class="student-add">
      <h3>Add Students</h3>
      <div class="add-students-options">
        <div class="manual-add-btn">
          <a href="">Manually</a>
        </div>
        <div class="csv-add-btn">
          <a href="">Import CSV</a>
        </div>
      </div>
      <div class="student-add-form-wrapper">
        <form action="" onSubmit={submitForm} class="student-add-form">
          <div class="form-element">
            <input
              name="name"
              type="text"
              placeholder="Enter Student Name"
              required
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Enter Students Email Address"
            ></input>
          </div>
          <div class="form-element">
            <select name="class" required>
              <option value="class1">Class 1</option>
              <option value="class2">Class 2</option>
              <option value="class3">Class 3</option>
              <option value="class4">Class 4</option>
              <option value="class5">Class 5</option>
            </select>
            <select name="gender" required>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input
              type="text"
              name="dob"
              placeholder="Date of birth , DD/MM/YYYY"
              required
            ></input>
          </div>
          <div class="form-element">
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
            ></input>
            <input
              type="text"
              name="studentID"
              placeholder="Enter Your Student Id"
            ></input>
          </div>
          <div class="form-element">
            <button class="add-one-btn" type="submit">
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
