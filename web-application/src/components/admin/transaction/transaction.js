import { Outlet } from "react-router-dom";

import { useState } from "react";

const Transaction = () => {
  let [transaction, setTransaction] = useState([]);

  const addTransaction = (data) => {
    setTransaction((previousState) => {
      return [...previousState, data];
    });
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
