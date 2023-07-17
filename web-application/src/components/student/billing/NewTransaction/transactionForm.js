import React, { useEffect, useState } from "react";
import axios from "axios";
import ClassDropDown from "./classDropDown";
import MonthDropDown from "./monthDropDown";
import YearDropDown from "./yearDropDown";

const TransactionForm = ({
  studentID,
  handleYearChange,
  handleMonthChange,
  handleClassChange,
  classList,
  monthYearMap,
  activeYear,
}) => {
  return (
    <div className="transaction-form">
      <div className="form-wrapper">
        <label for="">Student ID</label>
        <input type="text" value={studentID} name="studentID"></input>
      </div>
      <div class="form-wrapper">
        <ClassDropDown
          classList={classList}
          handleClassChange={handleClassChange}
        />
      </div>
      <div class="form-wrapper">
        <YearDropDown
          monthYearMap={monthYearMap}
          handleYearChange={handleYearChange}
        />
      </div>
      <div class="form-wrapper">
        <MonthDropDown
          monthYearMap={monthYearMap}
          handleMonthChange={handleMonthChange}
          activeYear={activeYear}
        />
      </div>
    </div>
  );
};

export default TransactionForm;
