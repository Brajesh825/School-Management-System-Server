import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";
import ClassDropDown from "./classDropDown";

const AddStudent = (data) => {
  const [error, setError] = useState("");
  const { addStudent } = useOutletContext();
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    var object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    object.noOfStudents = 0;
    let response = await addStudent(object);
    if (response.success == "true") {
      navigate("/admin/student");
    } else {
      setError(response.message);
    }
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
          <span>{error}</span>
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
            <ClassDropDown />
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
