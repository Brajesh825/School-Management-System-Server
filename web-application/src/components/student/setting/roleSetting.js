import React, { useState } from "react";

const RoleSetting = () => {
  const [role, setRole] = useState("Admin");
  return (
    <div class="account-setting-form">
      <form>
        <div class="profile-data">
          <div class="form-element">
            <label for="FullName">
              <span>Role</span>
              <input name="role" type="text" value={role}></input>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RoleSetting;
