import React from "react";
import { Link } from "react-router-dom";

const TransactionSubtitleBar = () => {
  return (
    <div className="student-imports-bar">
      <div className="student-imports-title">
        <p>Transactions</p>
      </div>
      <div className="student-imports-btns">
        <div className="export-csv-btn">
          <Link>Export CSV</Link>
        </div>
        <div className="add-students-btn">
          <Link to={"/admin/billing/add"}>Add Transaction</Link>
        </div>
      </div>
    </div>
  );
};

export default TransactionSubtitleBar;
