import React, { useState } from "react";
import ClassDropDown from "./classDropDown";
import MonthDropDown from "./monthDropDown";
import YearDropDown from "./yearDropDown";
import { useDispatch } from "react-redux";
import TransactionForm from "./transactionForm";

const NewTransaction = () => {
 

  return (
    <div class="transaction-main">
      <TransactionForm />
      <div class="transaction-view">
        <div class="view-wrapper">
          <span>Exam Fee</span>
          <span>0</span>
        </div>
        <div class="view-wrapper">
          <span>Hostel Fee</span>
          <span>0</span>
        </div>
        <div class="view-wrapper">
          <span>Transport Fee</span>
          <span>0</span>
        </div>
        <div class="view-wrapper">
          <span>Tution Fee</span>
          <span>0</span>
        </div>
        <div class="view-wrapper">
          <span>Total Fee</span>
          <span>400</span>
        </div>
      </div>
      <div>
        <button class="btn pay-now-btn">Pay Now</button>
      </div>
    </div>
  );
};

export default NewTransaction;
