import Select from "react-select";

const ClassDropDown = ({ classList, setClass }) => {
  const handleChange = (e) => {
    setClass(e.value);
  };

  const classes = [];
  if (classList) {
    classes.push({
      value: classList._id,
      label: classList.className,
    });
  }

  return <Select onChange={handleChange} name="class" options={classes} />;
};

export default ClassDropDown;
