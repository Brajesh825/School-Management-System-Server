import React from "react";
import { Link } from "react-router-dom";

const StudentSubtitleBar = () => {
  return (
    <div className="student-imports-bar">
      <div className="student-imports-title">
        <p>Students</p>
      </div>
      <div className="student-imports-btns">
        <div className="export-csv-btn">
          <Link>Export CSV</Link>
        </div>
        <div className="add-students-btn">
          <Link to={"/admin/student/add"}>Add Students</Link>
        </div>
      </div>
    </div>
  );
};

export default StudentSubtitleBar;
