const ClassRow = ({ myClass }) => {
  let no = 1;
  return (
    <>
      <tr>
        <td>{no++}</td>
        <td> {myClass.className} </td>
        <td> {myClass.noOfStudents} </td>
      </tr>
    </>
  );
};

export default ClassRow;
