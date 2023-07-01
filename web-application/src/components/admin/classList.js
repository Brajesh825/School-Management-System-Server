import React from "react";

import SearchBar from "../searchBar/searchBar";
import ClassTable from "../table/classTable";
import SubtitleBar from "../subtitleBar/subtitleBar";

import { useOutletContext } from "react-router-dom";

const ClassList = () => {
  const { getAllClass, myClass } = useOutletContext();

  return (
    <>
      <SubtitleBar />
      <div class="entity-list-wrapper">
        <SearchBar />
        <ClassTable getAllClass={getAllClass} myClass={myClass} />
      </div>
    </>
  );
};

export default ClassList;
