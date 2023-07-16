import React from "react";

const SecuritySetting = () => {
  return (
    <>
      <div className="account-setting-form">
        <form>
          <div className="profile-data">
            <div className="form-element">
              <label for="FullName">
                <span>Password</span>
                <input
                  name="name"
                  type="password"
                  placeholder="Enter Your Password"
                  required
                ></input>
              </label>
            </div>
            <div className="form-element">
              <label for="PhoneNumber">
                <span>New Password</span>
                <input
                  name="mobile"
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
                  name="mobile"
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
