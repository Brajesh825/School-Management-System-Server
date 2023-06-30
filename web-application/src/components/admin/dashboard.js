import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="dashboard-main">
      <div className="dash-action-container">
        <h2>Welcome to your dashboard , P.N Academy</h2>
        <div className="actions">
          <div className="action-container">
            <object data="/icons/admin.svg"></object>
            <Link to={"/admin/add"} className="sidebar-option">
              Add Admins
            </Link>
          </div>
          <div className="action-container">
            <object data="/icons/class-big.svg"></object>
            <Link to={"/admin/class"} className="sidebar-option">
              Add Classes
            </Link>
          </div>
          <div className="action-container">
            <object data="/icons/student-big.svg"></object>
            <Link to={"/admin/student"} className="sidebar-option">
              Add Students
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
