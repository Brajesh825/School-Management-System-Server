const FeeRow = ({ feeStructure, id }) => {
  return (
    <tr id={id}>
      <td>{id}</td>
      <td> {feeStructure.class.className} </td>
      <td> {feeStructure.year} </td>
      <td> {feeStructure.month} </td>
      <td> {feeStructure.tutionFee} </td>
      <td> {feeStructure.transportFee} </td>
      <td> {feeStructure.libraryFee} </td>
      <td> {feeStructure.hostelFee} </td>
    </tr>
  );
};

export default FeeRow;
