import Select from "react-select";

const YearDropDown = ({ setYear }) => {
  const handleChange = (e) => {
    if (setYear) {
      setYear(e.value);
    }
  };

  const years = [
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" },
    { value: "2026", label: "2026" },
  ];

  return (
    <Select
      onChange={handleChange}
      defaultInputValue="2023"
      name="year"
      options={years}
    />
  );
};

export default YearDropDown;
