import React, { useState } from "react";
import TransactionSlider from "./transactionSlider";
import AllTransactions from "./AllTransaction/allTransaction";
import MyTransactions from "./MyTransaction/myTransactions";
import NewTransaction from "./NewTransaction/newTransaction";

const StudentTransaction = () => {
  const [slider, setSlider] = useState("transaction");

  const view = () => {
    switch (slider) {
      case "transaction": {
        return <AllTransactions />;
        break;
      }
      case "newTransaction": {
        return <NewTransaction/>
        break;
      }
      case "myTransaction": {
        return <MyTransactions/>
        break;
      }
    }
  };

  return (
    <div class="fee-structure-main">
      <TransactionSlider activeSlider={slider} setActiveSlider={setSlider} />
      {view()}
    </div>
  );
};

export default StudentTransaction;
