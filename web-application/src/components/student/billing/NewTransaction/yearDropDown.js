import Select from "react-select";

const YearDropDown = ({ setActiveYear, monthYearMap }) => {
  const handleChange = (e) => {
    setActiveYear(e.value);
  };
  const years = [];
  for (const key in monthYearMap) {
    years.push({
      value: key,
      label: key,
    });
  }


  return <Select onChange={handleChange} name="year" options={years} />;
};

export default YearDropDown;
