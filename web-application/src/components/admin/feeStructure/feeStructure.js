import FeeStruuctureSlider from "./feeStruuctureSlider";
import FeeStructureTable from "./feeStructureTable";
import AddFeeStructure from "./addFeeStructure";

import { useState } from "react";
import { useEffect } from "react";

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

  useEffect(() => {
    // Fetch All Fee Structure
    fetch("http://localhost:4000/api/v1/feeStructure")
      .then((myFeeStructure) => myFeeStructure.json())
      .then((data) => setFeeStructure(data));
  }, []);

  // Fee Structure
  const addFeeStructure = async (data) => {
    // Caching the data
    let myClass = data.class;
    data.class = data.class._id;
    let response = await fetch("http://localhost:4000/api/v1/feeStructure", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let feeStructure = await response.json();

    if (feeStructure.success == "true") {
      setFeeStructure((previousState) => {
        feeStructure.feeStructure.class = myClass;
        return [...previousState, feeStructure.feeStructure];
      });
    }
    return feeStructure;
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
            <FeeStructureTable allfeeStructures={allFeeStructures} />
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
            <AddFeeStructure
              addFeeStructure={addFeeStructure}
              changeSlider={setSlider}
            />
          </>
        );
        break;
      }
    }
  };

  return <div class="fee-structure-main">{view()}</div>;
};

export default FeeStructure;
