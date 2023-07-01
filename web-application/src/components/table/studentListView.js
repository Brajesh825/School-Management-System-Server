import React from "react";

const StudentListView = ({ filteredStudents }) => {
  let list = [];
  let no = 1;
  filteredStudents.forEach((product) => {
    let sno = no;
    let name = product.name;
    let email = product.email;
    let sclass = product.class;
    let gender = product.gender;
    let sID = product.studentID;

    list.push(
      <tr>
        <td>{sno}</td>
        <td> {name} </td>
        <td> {sID} </td>
        <td> {email} </td>
        <td> {sclass} </td>
        <td> {gender} </td>
      </tr>
    );
    no++;
  });

  return list;
};

export default StudentListView;
