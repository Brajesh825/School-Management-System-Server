import ClassRow from "./classRows";

const ClassListView = ({ filteredClasses }) => {
  let list = [];
  let no = 1;
  return (
    <>
      {filteredClasses.map((student, index) => (
        <ClassRow key={Math.random()} myClass={student} />
      ))}
    </>
  );
};

export default ClassListView;
