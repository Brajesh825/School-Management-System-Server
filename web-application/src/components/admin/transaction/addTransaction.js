import { useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";

const AddTransaction = () => {
  const [error, setError] = useState("");
  const { addTransaction } = useOutletContext();
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    var object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    let response = addTransaction(object);
    if (response.success == "true") {
      navigate("/admin/billing");
    } else {
      setError(response.message);
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
            <select name="class" required>
              <option value="" disabled selected hidden>
                Class
              </option>
              <option value="class 1">Class 1</option>
              <option value="class 2">Class 2</option>
              <option value="class 3">Class 3</option>
              <option value="class 4">Class 4</option>
              <option value="class 5">Class 5</option>
            </select>
            <select name="year" required>
              <option value="" disabled selected hidden>
                Year
              </option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
            <select name="month" required>
              <option value="" disabled selected hidden>
                Month
              </option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
            </select>
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
