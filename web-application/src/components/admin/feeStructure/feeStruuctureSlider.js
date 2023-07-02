import { Link } from "react-router-dom";

const FeeStruuctureSlider = ({ activeSlider, changeSlider }) => {
  return (
    <div class="fee-structure-slider">
      <Link
        name="list"
        className={activeSlider == "list" ? "active-slider" : ""}
        onClick={changeSlider}
      >
        Fee Structure
      </Link>
      <Link
        name="form"
        onClick={changeSlider}
        className={activeSlider == "form" ? "active-slider" : ""}
      >
        New Fee Structure
      </Link>
    </div>
  );
};

export default FeeStruuctureSlider;
