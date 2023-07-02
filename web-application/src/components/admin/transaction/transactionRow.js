const TransactionRow = ({ transaction, id }) => {
  let {
    _id,
    studentID,
    class: currClass,
    year,
    month,
    phone,
    email,
    amount,
    transactionType,
    name,
    transactionID,
  } = transaction;

  if (transactionType.toLowerCase() == "cash") {
    transactionID = "NA";
  }
  if (!name) {
    name = "testing";
  }

  return (
    <tr id={studentID}>
      <td>{id}</td>
      <td> {studentID} </td>
      <td> {name} </td>
      <td> {transactionID} </td>
      <td> {month} </td>
      <td> {year} </td>
      <td> {transactionType} </td>
      <td> {amount} </td>
    </tr>
  );
};

export default TransactionRow;
