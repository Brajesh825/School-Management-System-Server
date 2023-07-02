import React from "react";

const FeeStructureTable = () => {
  return (
    <div className="fee-structure-table">
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Class</th>
            <th>Year</th>
            <th>Month</th>
            <th>Tution Fee</th>
            <th>Transport Fee</th>
            <th>Exam Fee</th>
            <th>Library Fee</th>
            <th>Hostel Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1A</td>
            <td>2023</td>
            <td>January</td>
            <td>500</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FeeStructureTable;
