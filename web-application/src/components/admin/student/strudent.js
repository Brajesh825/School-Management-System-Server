import React from "react";
import { Outlet } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";

const Student = () => {
  let [myStudent, setStudent] = useState([]);

  useEffect(() => {
    // Fetch All Class
    fetch("http://localhost:4000/api/v1/student")
      .then((myClass) => myClass.json())
      .then((data) => {
        setStudent(data);
      });
  }, []);

  const addStudent = async (data) => {
    let response = await fetch("http://localhost:4000/api/v1/student", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let student = await response.json();
    console.log(student);

    if (student.success == "true") {
      setStudent((previousState) => {
        return [...previousState, student.student];
      });
    }
    return student;
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
