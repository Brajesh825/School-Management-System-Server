import React from "react";

const AllTransactions = () => {
  return (
    <div className="transaction-list">
      <div className="transaction-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Student ID</th>
              <th>Class</th>
              <th>Transaction ID</th>
              <th>Month</th>
              <th>Year</th>
              <th>Mode</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brajesh</td>
              <td>19CSE10</td>
              <td>5</td>
              <td>NA</td>
              <td>January</td>
              <td>2023</td>
              <td>Offline</td>
              <td>500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTransactions;
