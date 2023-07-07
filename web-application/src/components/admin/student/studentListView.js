import StudentRow from "./studentRows";

const StudentListView = ({ filteredStudents, handleActiveStudent }) => {
  let no = 0;
  return (
    <>
      {filteredStudents.map((student, index) => (
        <StudentRow
          handleActiveStudent={handleActiveStudent}
          key={no++}
          id={no+1}
          student={student}
        />
      ))}
    </>
  );
};

export default StudentListView;