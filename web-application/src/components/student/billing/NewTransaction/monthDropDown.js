import Select from "react-select";

const MonthDropDown = ({ monthYearMap, setActiveMonth, activeYear }) => {
  console.log(monthYearMap, activeYear);

  const handleChange = (e) => {
    setActiveMonth(e.value);
  };

  if (!activeYear) {
    return <></>;
  }

  let monthList = monthYearMap[activeYear];
  const months = [];
  for (let i = 0; i < monthList.length; i++) {
    const element = monthList[i];
    months.push({
      value: element,
      label: element,
    });
  }

  return <Select onChange={handleChange} name="month" options={months} />;
};

export default MonthDropDown;
