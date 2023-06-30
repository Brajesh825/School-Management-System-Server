import React from "react";

import SearchBar from "../searchBar/searchBar";
import StudentTable from "../table/classTable";
import SubtitleBar from "../subtitleBar/subtitleBar";

import { useOutletContext } from "react-router-dom";

const ClassList = () => {
  const { getAllClass, myClass } = useOutletContext();

  return (
    <>
      <SubtitleBar />
      <div class="entity-list-wrapper">
        <SearchBar />
        <StudentTable getAllClass={getAllClass} myClass={myClass} />
      </div>
    </>
  );
};

export default ClassList;
