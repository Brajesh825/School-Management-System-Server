import { Outlet } from "react-router-dom";

import { useState } from "react";

const Transaction = () => {
  let [transaction, setTransaction] = useState([]);

  const addTransaction = async (data) => {
    let response = await fetch("http://localhost:4000/api/v1/order", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let order = await response.json();

    if (order.success == "true") {
      setTransaction((previousState) => {
        return [...previousState, student.student];
      });
    }
    return student;
  };

  const getAllTransactions = () => {
    return transaction || [{}];
  };
  const allTransactions = getAllTransactions();

  return (
    <div class="entity-main">
      <Outlet context={{ addTransaction, allTransactions }} />
    </div>
  );
};

export default Transaction;
