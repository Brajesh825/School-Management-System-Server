import React from "react";
import { Link } from "react-router-dom";

const ClassSubtitleBar = () => {
  return (
    <div className="student-imports-bar">
      <div className="student-imports-title">
        <p>Classes</p>
      </div>
      <div className="student-imports-btns">
        <div className="export-csv-btn">
          <Link>Export CSV</Link>
        </div>
        <div className="add-students-btn">
          <Link to={"/admin/class/add"}>Add Class</Link>
        </div>
      </div>
    </div>
  );
};

export default ClassSubtitleBar;
