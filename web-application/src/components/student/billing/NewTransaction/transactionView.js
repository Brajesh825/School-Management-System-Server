import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const TransactionView = ({ className, year, month }) => {
  const [transactionDetails, setTransactionDetails] = useState("");

  useEffect(() => {
    const data = {
      class: className,
      year: year,
      month: month,
    };
    axios
      .post("http://localhost:4000/api/v1/student/bill/", data, {
        withCredentials: true,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
  }, []);

  if (transactionDetails) {
    return (
      <div className="transaction-view">
        <div className="view-wrapper">
          <span>Exam Fee</span>
          <span>{transactionDetails.examFee}</span>
        </div>
        <div className="view-wrapper">
          <span>Hostel Fee</span>
          <span>{transactionDetails.hostelFee}</span>
        </div>
        <div className="view-wrapper">
          <span>Transport Fee</span>
          <span>{transactionDetails.transportFee}</span>
        </div>
        <div className="view-wrapper">
          <span>Tution Fee</span>
          <span>{transactionDetails.tutionFee}</span>
        </div>
        <div className="view-wrapper">
          <span>Total Fee</span>
          <span>{transactionDetails.totalFee}</span>
        </div>
      </div>
    );
  } else {
    return <br></br>;
  }
};

export default TransactionView;
