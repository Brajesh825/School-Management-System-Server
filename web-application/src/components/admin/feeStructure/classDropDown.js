import React from "react";

import AsyncSelect from "react-select/async";

import { useState } from "react";

const ClassDropDown = ({ setClass }) => {
  const [items, setItems] = useState([]);
  const [inputValue, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);

  // handle input change event
  const handleInputChange = (value) => {
    setValue(value);
  };

  const handleChange = (value) => {
    setSelectedValue(value);
    if (setClass) {
      setClass(value);
    }
  };

  const fetchClass = (key) => {
    return fetch("http://localhost:4000/api/v1/class")
      .then((myClass) => myClass.json())
      .then((data) => {
        setItems(data);
        let filteredData = data.filter((element) => {
          return element.className.includes(key);
        });
        return filteredData;
      });
  };

  return (
    <AsyncSelect
      name="class"
      cacheOptions={items}
      loadOptions={fetchClass}
      getOptionLabel={(e) => e.className}
      getOptionValue={(e) => e._id}
      value={selectedValue}
      defaultOptions={items}
      onInputChange={handleInputChange}
      onChange={handleChange}
    />
  );
};

export default ClassDropDown;
