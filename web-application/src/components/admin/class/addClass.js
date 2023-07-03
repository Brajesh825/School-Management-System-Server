import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";

const AddClass = (data) => {
  const [error,setError] = useState("")

  const { addClass } = useOutletContext();
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    var object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    object.noOfStudents = 0;
    let response = await addClass(object);

    if (response.success == "true") {
      navigate("/admin/class");
    }else {
      setError(response.message)
    }
  };

  return (
    <div class="student-add">
      <h3>Add Classes</h3>
      <div class="add-students-options">
        <div class="manual-add-btn">
          <a href="">Manually</a>
        </div>
        <div class="csv-add-btn">
          <a href="">Import CSV</a>
        </div>
      </div>
      <div class="student-add-form-wrapper">
        <form class="student-add-form" onSubmit={submitForm}>
          <span>{error}</span>
          <div class="form-element">
            <input
              name="className"
              type="text"
              placeholder="Enter Class Name"
              required
            ></input>
          </div>
          <div class="form-element">
            <button class="add-one-btn">Add Class</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
