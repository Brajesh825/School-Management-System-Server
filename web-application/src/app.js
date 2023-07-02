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

// sub Wrappers
import ClassList from "./components/admin/class/classList";
import StudentList from "./components/admin/student/studentList";
import TransactionList from "./components/admin/transaction/transactionList";

import AddClass from "./components/admin/class/addClass";
import AddStudent from "./components/admin/student/addStudent";
import AddTransaction from "./components/admin/transaction/addTransaction";

const router = createBrowserRouter([
  {
    path: "/student",
    errorElement: <Error />,
    element: <StudentLayout />,
    children: [
      {
        path: "",
      },
      {
        path: "dashboard",
      },
      {
        path: "billing",
      },
      {
        path: "setting",
      },
    ],
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
      // {
      //   path: "billing",
      // },
      // {
      //   path: "setting",
      // },
    ],
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
