import React from "react";

const MyTransactions = () => {
  return (
    <div class="transaction-list">
      <div class="transaction-table">
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Month</th>
              <th>Year</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>January</td>
              <td>2023</td>
              <td>Paid</td>
              <td>500</td>
              <td>Urgent</td>
            </tr>
            <tr>
              <td>1</td>
              <td>January</td>
              <td>2023</td>
              <td>Paid</td>
              <td>500</td>
              <td>Urgent</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTransactions;
