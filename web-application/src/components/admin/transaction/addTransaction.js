import { useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";
import ClassDropDown from "./classDropDown";
import YearDropDown from "./yearDropDown";
import MonthDropDown from "./monthDropDown";

const AddTransaction = () => {
  const [error, setError] = useState("");
  const { addTransaction } = useOutletContext();
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    var object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    let order = await addTransaction(object);
    console.log(order);
    if (order.success == "true") {
      window.location.reload()
    } else {
      setError(order.message);
    }
  };

  return (
    <div class="transaction-add">
      <h3>Add Transactions</h3>
      <div class="transaction-add-form-wrapper">
        <form action="" class="transaction-add-form" onSubmit={submitForm}>
          <span>{error}</span>
          <div class="form-element">
            <input
              name="studentID"
              type="text"
              placeholder="Enter Student ID"
              required
            ></input>
          </div>
          <div class="form-element">
            <ClassDropDown />
            <YearDropDown />
            <MonthDropDown />
          </div>
          <div class="form-element">
            <input
              type="tel"
              name="phone"
              placeholder="Enter Student Mobile Number"
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Enter Student Email Address"
            ></input>
          </div>
          <div class="form-element">
            <input type="txt" name="amount" placeholder="Enter Amount"></input>
            <select name="transactionType" required>
              <option value="" disabled selected hidden>
                Mode
              </option>
              <option value="cash">Cash</option>
              <option value="online">Online</option>
            </select>
          </div>
          <div class="form-element">
            <button class="add-one-btn" type="submit">
              Add Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
