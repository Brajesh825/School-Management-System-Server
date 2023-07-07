import { useState } from "react";

import {  useNavigate } from "react-router-dom";
import ClassDropDown from "./classDropDown";
import MonthDropDown from "./monthDropDown";
import YearDropDown from "./yearDropDown";

const AddFeeStructure = ({ addFeeStructure, changeSlider }) => {
  const navigate = useNavigate();

  const [errors, setErrorMessage] = useState([]);

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
    if (data < 0) {
      setErrorMessage(`Library Fee can not be Negative`);
      setLibraryFee("");
    } else {
      setLibraryFee(data);
    }
  };
  const setMyTutionFee = (e) => {
    let data = e.target.value;
    if (data < 0) {
      setErrorMessage(`Tution Fee can not be Negative`);
      setTutionFee("");
    } else {
      setTutionFee(data);
    }
  };
  const setMyTransportFee = (e) => {
    let data = e.target.value;
    if (data < 0) {
      setErrorMessage(`Transport Fee can not be Negative`);
      setTransportFee("");
    } else {
      setTransportFee(data);
    }
  };

  const setMyHostelFee = (e) => {
    let data = e.target.value;
    if (data < 0) {
      setErrorMessage(`Hostel Fee can not be Negative`);
      setHostelFee("");
    } else {
      setHostelFee(data);
    }
  };

  const validateRequired = (data) => {
    setErrorMessage("");
    for (const key in data) {
      if (data[key] == "") {
        setErrorMessage(`${key} can not be Empty`);
        return false;
      }
    }
    return true;
  };

  // handling Form
  const submitForm = async (e) => {
    let data = {
      class: myclass,
      month,
      year,
      libraryFee,
      tutionFee,
      hostelFee,
      transportFee,
    };

    let isValidatedRequired = validateRequired(data);
    if (isValidatedRequired) {
      let response = await addFeeStructure(data);
      if (response.success == "true") {
        changeSlider("list");
      } else {
        setErrorMessage(response.message);
      }
    }
  };

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
            <span> {errors} </span>
            <div className="form-element">
              <ClassDropDown setClass={setClass} />
              <YearDropDown setYear={setYear} />
              <MonthDropDown setMonth={setMonth} />
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
              <a onClick={submitForm} className="btn add-one-btn">
                Add Fee Structure
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddFeeStructure;
