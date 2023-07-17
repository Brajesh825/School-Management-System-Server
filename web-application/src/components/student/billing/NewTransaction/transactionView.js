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
      .then((res) => {
        switch (res.status) {
          case 200: {
            const feeStructure = res.data.feeStructure;

            setTransactionDetails({
              transportFee: feeStructure.transportFee,
              tutionFee: feeStructure.tutionFee,
              libraryFee: feeStructure.libraryFee,
              hostelFee: feeStructure.hostelFee,
            });
            break;
          }
        }
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
  }, []);

  if (transactionDetails) {
    console.log(transactionDetails);

    const totalFee =
      transactionDetails.transportFee +
      transactionDetails.tutionFee +
      transactionDetails.libraryFee +
      transactionDetails.hostelFee;

    return (
      <div className="transaction-view">
        <div className="view-wrapper">
          <span>Library Fee</span>
          <span>{transactionDetails.libraryFee}</span>
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
          <span>{totalFee}</span>
        </div>
      </div>
    );
  } else {
    return <br></br>;
  }
};

export default TransactionView;
