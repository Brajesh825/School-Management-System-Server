import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";

import ClassDropDown from "./classDropDown";
import YearDropDown from "./yearDropDown";
import MonthDropDown from "./monthDropDown";

const TransactionForm = () => {
  const studentID = useSelector((state) => state.studentID);
  const [myClass, setClass] = useState("");
  const [monthYearMap, setMonthYearMap] = useState({});
  const [classList, setClassList] = useState({});
  const [activeYear, setActiveYear] = useState("");
  const [activeMonth, setActiveMonth] = useState("");

  const handleBillingData = (data) => {
    let classList = data.class;
    setClassList(classList);
    let yearMapping = data.yearMapping;
    setMonthYearMap(yearMapping);
  };

  useEffect(() => {
    // Fetch All Fee Structure
    axios
      .post(
        "http://localhost:4000/api/v1/student/bills/pendingList",
        {},
        { withCredentials: true }
      )
      .then((data) => handleBillingData(data.data))
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
  }, []);

  return (
    <div class="transaction-form">
      <div class="form-wrapper">
        <label for="">Student ID</label>
        <input type="text" value={studentID} name="studentID"></input>
      </div>
      <div class="form-wrapper">
        <ClassDropDown classList={classList} setClass={setClass} />
      </div>
      <div class="form-wrapper">
        <YearDropDown
          monthYearMap={monthYearMap}
          setActiveYear={setActiveYear}
        />
      </div>
      <div class="form-wrapper">
        <MonthDropDown
          monthYearMap={monthYearMap}
          setActiveMonth={setActiveMonth}
          activeYear={activeYear}
        />
      </div>
    </div>
  );
};

export default TransactionForm;
