import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SecuritySetting = () => {
  const navidate = useNavigate();

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const showMessage = () => {
    if (errorMessage) {
      return (
        <span style={{ color: "red", paddingLeft: "1rem" }}>
          {errorMessage}
        </span>
      );
    } else {
      return (
        <span style={{ color: "blue", paddingLeft: "1rem" }}>
          {successMessage}
        </span>
      );
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (newPassword != confirmPassword) {
      setErrorMessage("New Password and Confirm New Password are not same");
    } else {
      const data = { password, newPassword, confirmPassword };
      setErrorMessage(undefined);
      setSuccessMessage(null);
      axios
        .patch("http://localhost:4000/api/v1/student/changePassword", data, {
          withCredentials: true,
        })
        .then((response) => {
          let status = response.status;
          let data = response.data;
          console.log(status);

          switch (status) {
            case 200: {
              console.log("Succeeded");
              setSuccessMessage(data.message);

              setTimeout(() => {
                navidate("/admin/setting");
              }, 2000);

              break;
            }

            case 400: {
              setErrorMessage(data.message);
              break;
            }
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <>
      <div className="account-setting-form">
        <form onSubmit={handleOnSubmit}>
          {showMessage()}
          <div className="profile-data">
            <div className="form-element">
              <label for="FullName">
                <span>Password</span>
                <input
                  name="name"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter Your Password"
                  required
                ></input>
              </label>
            </div>
            <div className="form-element">
              <label for="new-password">
                <span>New Password</span>
                <input
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                  name="newPassword"
                  type="password"
                  placeholder="Enter Your New Password"
                  required
                ></input>
              </label>
            </div>
            <div className="form-element">
              <label for="PhoneNumber">
                <span>Confirm New Password</span>
                <input
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Your New Password"
                  required
                ></input>
              </label>
            </div>
          </div>
          <div className="profile-submit-btn">
            <button type="submit">Change Password</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SecuritySetting;
