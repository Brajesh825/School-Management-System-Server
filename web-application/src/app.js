import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "./error";

import AdminLayout from "./components/layout/adminLayout";
import StudentLayout from "./components/layout/studentLayout";

// main wrappers
import AdminDashboard from "./components/admin/dashboard/dashboard";
import Class from "./components/admin/class/class";
import Student from "./components/admin/student/strudent";
import Transaction from "./components/admin/transaction/transaction";
import FeeStructure from "./components/admin/feeStructure/feeStructure";

// sub Wrappers
import ClassList from "./components/admin/class/classList";
import StudentList from "./components/admin/student/studentList";
import TransactionList from "./components/admin/transaction/transactionList";

import AddClass from "./components/admin/class/addClass";
import AddStudent from "./components/admin/student/addStudent";
import AddTransaction from "./components/admin/transaction/addTransaction";
import StudentDashboard from "./components/student/dashboard/dashboard";
import StudentLoginForm from "./components/student/login/studentLoginForm";
import AdminLoginForm from "./components/admin/login/adminLoginForm";
import StudentTransaction from "./components/student/billing/transaction";
import AdminSettings from "./components/admin/setting/setting";
import StudentSettings from "./components/student/setting/setting";

const router = createBrowserRouter([
  {
    path: "/student",
    errorElement: <Error />,
    element: <StudentLayout />,
    children: [
      {
        path: "",
        element: <StudentDashboard />,
      },
      {
        path: "dashboard",
        element: <StudentDashboard />,
      },
      {
        path: "billing",
        element: <StudentTransaction />,
      },
      {
        path: "setting",
        element: <StudentSettings/>
      },
    ],
  },
  {
    path: "/student/login",
    errorElement: <Error />,
    element: <StudentLoginForm />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <AdminDashboard />,
      },
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "class",
        element: <Class />,
        children: [
          {
            path: "",
            element: <ClassList />,
          },
          {
            path: "add",
            element: <AddClass />,
          },
        ],
      },
      {
        path: "student",
        element: <Student />,
        children: [
          {
            path: "",
            element: <StudentList />,
          },
          {
            path: "add",
            element: <AddStudent />,
          },
        ],
      },
      {
        path: "billing",
        element: <Transaction />,
        children: [
          {
            path: "",
            element: <TransactionList />,
          },
          {
            path: "add",
            element: <AddTransaction />,
          },
        ],
      },
      {
        path: "fee",
        element: <FeeStructure />,
      },
      {
        path: "setting",
        element: <AdminSettings />,
      },
    ],
  },
  {
    path: "/admin/login",
    errorElement: <Error />,
    element: <AdminLoginForm />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
