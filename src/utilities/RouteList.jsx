import React from "react";
import { Navigate } from "react-router-dom";
import LoginPage from "../components/auth/LoginPage.jsx";
import MovieList from "../components/movies/MovieList.jsx";
import ToWatchList from "../components/movies/ToWatchList.jsx";
const routes = [
  {
    path: "main",
    element: <MovieList />,
    private: true,
  },
  {
    path: "to-watch",
    element: <ToWatchList />,
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
