import { useState } from "react";
import StudentListView from "./studentListView";
import StudentProfile from "./studentProfile";

const StudentTable = ({ allStudents }) => {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);
  const [activeStudent, setActiveStudent] = useState({});
  const [activeStudentShow, setActiveStudentShow] = useState("");
  const filteredPersons = allStudents.filter((person) => {
    return (
      person.name.toLowerCase().includes(searchField.toLowerCase()) ||
      person.email.toLowerCase().includes(searchField.toLowerCase()) ||
      person.studentID.toLowerCase().includes(searchField.toLowerCase()) ||
      person.class.toLowerCase().includes(searchField.toLowerCase()) ||
      person.gender.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  function searchList() {
    if (searchShow) {
      return (
        <StudentListView
          filteredStudents={filteredPersons}
          handleActiveStudent={handleActiveStudent}
        />
      );
    } else {
      return (
        <StudentListView
          filteredStudents={allStudents}
          handleActiveStudent={handleActiveStudent}
        />
      );
    }
  }
  function activeStudentView() {
    if (activeStudentShow) {
      return <StudentProfile student={activeStudent} />;
    }
  }

  const handleActiveStudent = (e) => {
    let studentID = e.target.parentNode.getAttribute("id");
    let students = allStudents.filter(
      (student) => student.studentID == studentID
    );
    let currStudent = students[0];
    setActiveStudent(currStudent);
    setActiveStudentShow(true);
  };
  return (
    <>
      <div className="filter-wrapper">
        <div className="search-wrapper">
          <object data="/icons/search-icon.svg" type=""></object>
          <input
            type="search"
            placeholder="Search For A Student By Name,Email,Id or Class"
            onChange={handleChange}
          ></input>
        </div>
      </div>
      <div class="list">
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>S No.</th>
                <th>Name</th>
                <th>Student ID</th>
                <th>Email Address</th>
                <th>Class</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>{searchList()}</tbody>
          </table>
        </div>
        {activeStudentView()}
      </div>
    </>
  );
};

export default StudentTable;
