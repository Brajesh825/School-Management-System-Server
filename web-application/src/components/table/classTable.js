import React from "react";

import { useEffect } from "react";

const ClassTable = (props) => {
  const { getAllClass, myClass } = props;
  function renderClasses() {
    let list = [];
    let no = 1;
    let theClass = getAllClass();
    theClass.forEach((product) => {
      let sno = no;
      let className = product.className;
      let noOfStudents = product.noOfStudents;

      list.push(
        <tr>
          <td>{sno}</td>
          <td> {className} </td>
          <td> {noOfStudents} </td>
        </tr>
      );
      no++;
    });

    return list;
  }

  return (
    <div class="list">
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>S No.</th>
              <th>Class Name</th>
              <th>Number Of Students</th>
            </tr>
          </thead>
          <tbody>{renderClasses()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassTable;
