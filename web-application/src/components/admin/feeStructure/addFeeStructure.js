import { useState } from "react";

const AddFeeStructure = ({ AddFeeStructure }) => {
  const [myclass, setClass] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [libraryFee, setLibraryFee] = useState("");
  const [tutionFee, setTutionFee] = useState("");
  const [hostelFee, setHostelFee] = useState("");
  const [transportFee, setTransportFee] = useState("");

  // Handling Inputs
  const setMyClass = (e) => {
    let data = e.target.value;
    setClass(data);
  };
  const setMyMonth = (e) => {
    let data = e.target.value;
    setMonth(data);
  };
  const setMyYear = (e) => {
    let data = e.target.value;
    setYear(data);
  };
  const setMyLibraryFee = (e) => {
    let data = e.target.value;
    setLibraryFee(data);
  };
  const setMyTutionFee = (e) => {
    let data = e.target.value;
    setTutionFee(data);
  };
  const setMyTransportFee = (e) => {
    let data = e.target.value;
    setTransportFee(data);
  };

  const setMyHostelFee = (e) => {
    let data = e.target.value;
    setHostelFee(data);
  };

  // handling Form
  const submitForm = (e) => {};

  return (
    <>
      <div class="student-add">
        <h3>Add Fee Structure</h3>
        <div className="add-students-options">
          <div className="manual-add-btn">
            <a href="">Manually</a>
          </div>
          <div className="csv-add-btn">
            <a href="">Import CSV</a>
          </div>
        </div>
        <div className="fee-add-form-wrapper">
          <form className="fee-add-form">
            <div className="form-element">
              <select name="class" onChange={setMyClass} required>
                <option value="" disabled selected hidden>
                  Please Choose any class
                </option>
                <option value="class1">Class 1</option>
                <option value="class2">Class 2</option>
                <option value="class3">Class 3</option>
                <option value="class4">Class 4</option>
                <option value="class5">Class 5</option>
                <option value="class5">Class 6</option>
                <option value="class5">Class 7</option>
                <option value="class5">Class 8</option>
                <option value="class5">Class 9</option>
                <option value="class5">Class 10</option>
              </select>
              <select name="year" onChange={setMyYear} required>
                <option value="" disabled selected hidden>
                  Please Choose Year
                </option>
                <option value="20023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
              <select name="month" onChange={setMyMonth} required>
                <option value="" disabled selected hidden>
                  Please Choose Month
                </option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>
            <div className="form-element">
              <input
                type="number"
                name="libraryFee"
                onChange={setMyLibraryFee}
                placeholder="Library Fee"
              ></input>
              <input
                type="number"
                name="tutionFee"
                onChange={setMyTutionFee}
                placeholder="Tution Fee"
              ></input>
            </div>
            <div className="form-element">
              <input
                onChange={setMyHostelFee}
                type="number"
                name="hostelFee"
                placeholder="Hostel Fee"
              ></input>
              <input
                onChange={setMyTransportFee}
                type="number"
                name="transportFee"
                placeholder="Transport Fee"
              ></input>
            </div>
            <div className="form-element">
              <button onChange={submitForm} className="add-one-btn">
                Add Fee Structure
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddFeeStructure;
