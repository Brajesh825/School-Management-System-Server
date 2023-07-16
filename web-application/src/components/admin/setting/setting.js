import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountSetting from "./accountSetting";
import SecuritySetting from "./securitySetting";
import RoleSetting from "./roleSetting";

const AdminSettings = () => {
  const [slider, setSlider] = useState("Account");

  function View() {
    switch (slider) {
      case "Account":
        return <AccountSetting />;
      case "Security":
        return <SecuritySetting />;
      case "Role":
        return <RoleSetting />;
    }
  }

  return (
    <>
      <div className="fee-structure-main">
        <div className="fee-structure-slider">
          <Link
            className={slider == "Account" ? "active-slider" : ""}
            onClick={() => setSlider("Account")}
          >
            {" "}
            Account Setting
          </Link>
          <Link
            className={slider == "Security" ? "active-slider" : ""}
            onClick={() => setSlider("Security")}
          >
            {" "}
            Login & Security{" "}
          </Link>
          <Link
            className={slider == "Role" ? "active-slider" : ""}
            onClick={() => setSlider("Role")}
          >
            {" "}
            Role & Permissions
          </Link>
        </div>
        {View()}
      </div>
    </>
  );
};

export default AdminSettings;
