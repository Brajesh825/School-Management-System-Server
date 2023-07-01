import { useState } from "react";
import ClassListView from "./classListView";

const ClassTable = ({ allClasses }) => {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filteredClasses = allClasses.filter((person) => {
    return person.className.toLowerCase().includes(searchField.toLowerCase());
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
      return <ClassListView filteredClasses={filteredClasses} />;
    } else {
      return <ClassListView filteredClasses={allClasses} />;
    }
  }

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
                <th>Class Name</th>
                <th>Number Of Students</th>
              </tr>
            </thead>
            <tbody>{searchList()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ClassTable;
