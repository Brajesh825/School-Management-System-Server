import StudentRow from "./studentRows";

const StudentListView = ({ filteredStudents, handleActiveStudent }) => {
  let no = 1;
  return (
    <>
      {filteredStudents.map((student, index) => (
        <StudentRow
          handleActiveStudent={handleActiveStudent}
          key={no++}
          id={no++}
          student={student}
        />
      ))}
    </>
  );
};

export default StudentListView;
