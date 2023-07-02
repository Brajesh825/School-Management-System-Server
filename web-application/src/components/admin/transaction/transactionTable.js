import { useState } from "react";

import TransactionListView from "./transactionListView";

const TransactionTable = ({ allTransactions }) => {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filteredTransactions = allTransactions.filter((transaction) => {
    if (transaction.transactionID) {
      return (
        transaction?.month.toLowerCase().includes(searchField.toLowerCase()) ||
        transaction?.year.toLowerCase().includes(searchField.toLowerCase()) ||
        transaction?.class.toLowerCase().includes(searchField.toLowerCase()) ||
        transaction?.amount.toLowerCase().includes(searchField.toLowerCase()) ||
        transaction?.transactionType
          .toLowerCase()
          .includes(searchField.toLowerCase()) ||
        transaction?.transactionID
          .toLowerCase()
          .includes(searchField.toLowerCase()) ||
        transaction?.studentID.toLowerCase().includes(searchField.toLowerCase())
      );
    } else {
     return  transaction?.month.toLowerCase().includes(searchField.toLowerCase()) ||
        transaction?.year.toLowerCase().includes(searchField.toLowerCase()) ||
        transaction?.class.toLowerCase().includes(searchField.toLowerCase()) ||
        transaction?.amount.toLowerCase().includes(searchField.toLowerCase()) ||
        transaction?.transactionType
          .toLowerCase()
          .includes(searchField.toLowerCase()) ||
        transaction?.studentID
          .toLowerCase()
          .includes(searchField.toLowerCase());
    }
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  function searchList() {
    if (searchShow) {
      return (
        <TransactionListView filteredTransactions={filteredTransactions} />
      );
    } else {
      return <TransactionListView filteredTransactions={allTransactions} />;
    }
  }

  return (
    <>
      <div className="filter-wrapper">
        <div className="search-wrapper">
          <object data="/icons/search-icon.svg" type=""></object>
          <input
            type="search"
            placeholder="Search For A transaction By Name,Email,Id or Class"
            onChange={handleChange}
          ></input>
        </div>
      </div>
      <div className="list">
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>S No.</th>
                <th>Student ID</th>
                <th>Name</th>
                <th>Transaction ID</th>
                <th>Month</th>
                <th>Year</th>
                <th>Mode</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>{searchList()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TransactionTable;
