import FeeRow from "./FeeRows";

const FeeStructureTable = ({ allfeeStructures }) => {
  let no = 1;
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
            <th>Library Fee</th>
            <th>Hostel Fee</th>
          </tr>
        </thead>
        <tbody>
          {allfeeStructures.map((feeStructure, index) => (
            <FeeRow key={no+1} id={no++} feeStructure={feeStructure} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeeStructureTable;
