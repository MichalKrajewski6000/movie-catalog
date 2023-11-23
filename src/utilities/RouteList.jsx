import React from "react";
import MainRoute from "../components/test/MainRoute.jsx";
import SecondRoute from "../components/test/SecondRoute.jsx";
const routes = [
    {
        path: "main",
        element: <MainRoute />
    },
    {
        path: "second",
        element: <SecondRoute />
    }
];

export default routes;