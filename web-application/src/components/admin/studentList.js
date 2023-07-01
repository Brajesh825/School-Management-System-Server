import React from "react";

import StudentTable from "../table/studentTable";
import StudentSubtitleBar from "../subtitleBar/StudentSubtitleBar";

import { useOutletContext } from "react-router-dom";

const StudentList = () => {
  const { allStudents } = useOutletContext();

  return (
    <>
      <StudentSubtitleBar />
      <div class="entity-list-wrapper">
        <StudentTable allStudents={allStudents} />
      </div>
    </>
  );
};

export default StudentList;
