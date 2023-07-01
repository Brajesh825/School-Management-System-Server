import React from "react";
import { Outlet } from "react-router-dom";

import { useState } from "react";

const Student = () => {
  let [myStudent, setStudent] = useState([]);

  const addStudent = (data) => {
    setStudent((previousState) => {
      return [...previousState, data];
    });
  };

  const getAllStudents = () => {
    return myStudent || [{}];
  };
  const allStudents = getAllStudents();

  return (
    <div class="entity-main">
      <Outlet context={{ addStudent, allStudents }} />
    </div>
  );
};

export default Student;
