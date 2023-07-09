import { Outlet } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";

const Transaction = () => {
  let [transaction, setTransaction] = useState([]);

  useEffect(() => {
    // Fetch All Class
    fetch("http://localhost:4000/api/v1/order")
      .then((order) => order.json())
      .then((data) => {
        for (const dat of data) {
          dat.className = dat.classId.className;
          dat.studentName = dat.studentID.name;
          dat.studentID = dat.studentID.studentID;
          dat.classId = dat.classId._id;
        }

        setTransaction(data);
      });
  }, []);

  const addTransaction = async (data) => {
    console.log(data);

    let response = await fetch("http://localhost:4000/api/v1/order", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let order = await response.json();

    if (order.success == "true") {
      setTransaction((previousState) => {
        return [...previousState, order.order];
      });
    }
    return order;
  };

  const getAllTransactions = () => {
    return transaction || [{}];
  };
  const allTransactions = getAllTransactions();

  return (
    <div class="entity-main">
      <Outlet context={{ addTransaction, allTransactions }} />
    </div>
  );
};

export default Transaction;
