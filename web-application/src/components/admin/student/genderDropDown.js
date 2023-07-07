import React from "react";

import Select from "react-select";

const GenderDropDown = () => {
  const genders = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
  ];

  return <Select name="gender" options={genders} />;
};

export default GenderDropDown;
