import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";

import AdminLayout from "./components/layout/adminLayout";
import StudentLayout from "./components/layout/studentLayout";

const router = createBrowserRouter([
  {
    path: "/student",
    element: <StudentLayout />,
    children: [
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
      },
      {
        path: "dashboard",
      },
      {
        path: "class",
      },
      {
        path: "student",
      },
      {
        path: "fee",
      },
      {
        path: "billing",
      },
      {
        path: "setting",
      },
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
