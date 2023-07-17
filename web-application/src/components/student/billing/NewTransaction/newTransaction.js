import React, { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import TransactionForm from "./transactionForm";
import TransactionView from "./transactionView";
import { useEffect } from "react";

const NewTransaction = () => {
  const [transactionView, SetTransactionView] = useState(false);
  const studentID = useSelector((state) => {
    return state.state.user.studentID;
  });
  const [myClass, setClass] = useState("");
  const [monthYearMap, setMonthYearMap] = useState({});
  const [classList, setClassList] = useState({});
  const [activeYear, setActiveYear] = useState("");
  const [activeMonth, setActiveMonth] = useState("");
  const handleClassChange = (e) => {
    setClass(e.value);
    if ((myClass && activeYear, activeMonth)) {
      SetTransactionView(true);
    }
  };
  const handleYearChange = (e) => {
    setActiveYear(e.value);
    if ((myClass && activeYear, activeMonth)) {
      SetTransactionView(true);
    }
  };
  const handleMonthChange = (e) => {
    setActiveMonth(e.value);
    if ((myClass && activeYear, activeMonth)) {
      SetTransactionView(true);
    }
  };
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

  function viewTransaction() {
    if (transactionView) {
      return (
        <TransactionView
          className={myClass}
          year={activeYear}
          month={activeMonth}
        />
      );
    }
  }

  return (
    <div class="transaction-main">
      <TransactionForm
        studentID={studentID}
        handleYearChange={handleYearChange}
        handleMonthChange={handleMonthChange}
        handleClassChange={handleClassChange}
        classList={classList}
        monthYearMap={monthYearMap}
        activeYear={activeYear}
      />
      {viewTransaction()}
      <div>
        <button class="btn pay-now-btn">Pay Now</button>
      </div>
    </div>
  );
};

export default NewTransaction;
