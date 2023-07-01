import { Outlet } from "react-router-dom";

import { useState } from "react";

const Class = () => {
  let [myClass, setClass] = useState([]);

  const addClass = (data) => {
    setClass((previousState) => {
      return [...previousState, data];
    });
  };

  const getAllClass = () => {
    return myClass || [{}];
  };

  const allClasses = getAllClass();

  return (
    <div class="entity-main">
      <Outlet context={{ addClass, allClasses }} />
    </div>
  );
};

export default Class;
