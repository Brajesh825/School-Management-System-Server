const StudentRow = ({ student, handleActiveStudent, id }) => {
  return (
    <tr id={student.studentID} onClick={handleActiveStudent}>
      <td>{id}</td>
      <td> {student.name} </td>
      <td> {student.studentID} </td>
      <td> {student.email} </td>
      <td> {student.class} </td>
      <td> {student.gender} </td>
    </tr>
  );
};

export default StudentRow;
