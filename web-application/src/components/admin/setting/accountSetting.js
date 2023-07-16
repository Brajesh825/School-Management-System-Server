import React from "react";
import axios from "axios";
import { useEffect } from "react";

import { useState } from "react";

const AccountSetting = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [profile, setProfile] = useState("/icons/uploadPhoto.svg");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/authority/me",
        {},
        { withCredentials: true }
      );
      let { name, profilePic, email, mobile } = data;
      setName(name);
      setEmail(email);
      setMobile(mobile);
      if (profilePic) {
        setProfile(profilePic);
      }
    };
    fetchData();
  }, []);

  function handleFileChange(event) {
    setSelectedFile(event.target.files[0]);
  }
  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handleMobileChange(event) {
    setMobile(event.target.value);
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("mobile", mobile);

    axios
      .patch("http://localhost:4000/api/v1/authority", formData, {
        withCredentials: true,
      })
      .then((response) => {
        let data = response.data;
        setProfile(data.url);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="account-setting-form">
      <form onSubmit={handleFormSubmit}>
        <div className="profile-picture-selector">
          <span>Your Profile Picture</span>
          <label for="upload-button" class="custom-button">
            <img src={profile} width={120} height={80} alt="Upload Icon"></img>
            <input
              id="upload-button"
              name="profile-pic"
              type="file"
              onChange={handleFileChange}
            ></input>
            <span>Upload Your Photo</span>
          </label>
        </div>
        <div className="profile-data">
          <div className="form-element">
            <label for="FullName">
              <span>Full Name</span>
              <input
                name="name"
                value={name}
                onChange={handleNameChange}
                type="text"
                placeholder="Enter Your Name"
                required
              ></input>
            </label>
            <label for="Email">
              <span>Email</span>
              <input
                name="email"
                type="text"
                onChange={handleEmailChange}
                value={email}
                placeholder="Enter Your Email"
                required
              ></input>
            </label>
          </div>
          <div className="form-element">
            <label for="PhoneNumber">
              <span>Phone Number</span>
              <input
                name="mobile"
                type="text"
                value={mobile}
                onChange={handleMobileChange}
                placeholder="Enter Your Phone Number"
                required
              ></input>
            </label>
          </div>
        </div>
        <div className="profile-submit-btn">
          <button type="submit">Update Profile</button>
        </div>
      </form>
    </div>
  );
};

export default AccountSetting;
