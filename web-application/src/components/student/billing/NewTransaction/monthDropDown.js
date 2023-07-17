import Select from "react-select";

const MonthDropDown = ({ monthYearMap, handleMonthChange, activeYear }) => {
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

  return <Select onChange={handleMonthChange} name="month" options={months} />;
};

export default MonthDropDown;
