import Select from "react-select";

const YearDropDown = ({ handleYearChange, monthYearMap }) => {
  const years = [];
  for (const key in monthYearMap) {
    years.push({
      value: key,
      label: key,
    });
  }

  return <Select onChange={handleYearChange} name="year" options={years} />;
};

export default YearDropDown;
