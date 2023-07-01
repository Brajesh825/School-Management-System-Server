import React from "react";

import ClassTable from "./classTable";
import ClassSubtitleBar from "./classSubtitleBar";

import { useOutletContext } from "react-router-dom";

const ClassList = () => {
  const { allClasses } = useOutletContext();

  return (
    <>
      <ClassSubtitleBar />
      <div class="entity-list-wrapper">
        <ClassTable allClasses={allClasses} />
      </div>
    </>
  );
};

export default ClassList;
