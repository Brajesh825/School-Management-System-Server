import Select from "react-select";

const MonthDropDown = ({ setMonth }) => {
  const handleChange = (e) => {
    if (setMonth) {
      setMonth(e.value);
    }
  };

  const months = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];

  return (
    <Select
      onChange={handleChange}
      defaultInputValue="January"
      name="month"
      options={months}
    />
  );
};

export default MonthDropDown;
