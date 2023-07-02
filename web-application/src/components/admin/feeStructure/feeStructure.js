import FeeStruuctureSlider from "./feeStruuctureSlider";
import FeeStructureTable from "./feeStructureTable";
import AddFeeStructure from "./addFeeStructure";

import { useState } from "react";

const FeeStructure = () => {
  const [slider, setSlider] = useState("list");

  const [feeStructure, setFeeStructure] = useState([]);

  // Slider
  const changeSlider = (e) => {
    let activeSlider = e.target.getAttribute("name") || "list";
    setSlider(activeSlider);
  };

  const getActiveSlider = () => {
    return slider;
  };

  // Fee Structure
  const addFeeStructure = (data) => {
    setFeeStructure((previousState) => {
      return [...previousState, data];
    });
  };

  const getAllFeeStructures = () => {
    return feeStructure || [{}];
  };
  const allFeeStructures = getAllFeeStructures();

  const view = () => {
    const activeSlider = getActiveSlider();
    switch (activeSlider) {
      case "list": {
        return (
          <>
            <FeeStruuctureSlider
              activeSlider={activeSlider}
              changeSlider={changeSlider}
            />
            <FeeStructureTable feeStructures={allFeeStructures} />
          </>
        );
        break;
      }
      case "form": {
        return (
          <>
            <FeeStruuctureSlider
              activeSlider={activeSlider}
              changeSlider={changeSlider}
            />
            <AddFeeStructure addFeeStructure={addFeeStructure} />
          </>
        );
        break;
      }
    }
  };

  return <div class="fee-structure-main">{view()}</div>;
};

export default FeeStructure;
