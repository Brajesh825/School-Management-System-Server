import Select from "react-select";

const ClassDropDown = ({ classList, handleClassChange }) => {
  const classes = [];
  if (classList) {
    classes.push({
      value: classList._id,
      label: classList.className,
    });
  }
  return <Select onChange={handleClassChange} name="class" options={classes} />;
};

export default ClassDropDown;
