import React from "react";

import StudentTable from "./studentTable";
import StudentSubtitleBar from "./StudentSubtitleBar";

import { useOutletContext } from "react-router-dom";

const StudentList = () => {
  const { allStudents } = useOutletContext();
  let no = 1;
  return (
    <>
      <StudentSubtitleBar />
      <div class="entity-list-wrapper">
        <StudentTable key={no++} allStudents={allStudents} />
      </div>
    </>
  );
};

export default StudentList;
