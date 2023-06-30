import React from "react";

const searchBar = () => {
  return (
    <div className="filter-wrapper">
      <div className="search-wrapper">
        <object data="/icons/search-icon.svg" type=""></object>
        <input
          type="text"
          placeholder="Search For A Student By Name,Email,Id or Class"
        ></input>
      </div>
    </div>
  );
};

export default searchBar;
