import React from "react";

import { useOutletContext } from "react-router-dom";
import TransactionSubtitleBar from "./transactionSubtitleBar";
import TransactionTable from "./transactionTable";

const TransactionList = () => {
  const { allTransactions } = useOutletContext();
  let no = 1;
  return (
    <>
      <TransactionSubtitleBar />
      <div class="entity-list-wrapper">
        <TransactionTable key={no++} allTransactions={allTransactions} />
      </div>
    </>
  );
};

export default TransactionList;
