const TransactionRow = ({ transaction, sno }) => {
  console.log(transaction);

  let {
    _id,
    studentID,
    class: currClass,
    year,
    month,
    modeOfTransaction,
    studentName,
    transactionID,
    totalAmount,
    orderNumber,
  } = transaction;

  return (
    <tr id={_id}>
      <td>{sno}</td>
      <td> {studentID} </td>
      <td> {studentName} </td>
      <td> {transactionID} </td>
      <td> {orderNumber} </td>
      <td> {month} </td>
      <td> {year} </td>
      <td> {modeOfTransaction} </td>
      <td> {totalAmount} </td>
    </tr>
  );
};

export default TransactionRow;
