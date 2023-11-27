import React from "react";
import MainRoute from "../components/test/MainRoute.jsx";
import SecondRoute from "../components/test/SecondRoute.jsx";
import { Navigate, Redire } from "react-router-dom";
import LoginPage from "../components/auth/LoginPage.jsx";
const routes = [
  {
    path: "main",
    element: <MainRoute />,
    private: true,
  },
  {
    path: "second",
    element: <SecondRoute />,
    private: true,
  },
  {
    path: "login",
    element: <LoginPage />,
    private: false,
  },
  {
    path: "/",
    element: <Navigate to="main" />,
  },
  {
    path: "*",
    element: <Navigate to="main" />,
  },
];

export default routes;
