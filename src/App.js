import React from "react";
import AppLayout from "./components/layout/AppLayout.jsx";
import routes from "./utilities/RouteList.jsx";

import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import MainRoute from "./components/test/MainRoute.jsx";
import SecondRoute from "./components/test/SecondRoute.jsx";

const App = () => {

    const router = createBrowserRouter(routes);

    return <AppLayout><RouterProvider router={router} /></AppLayout>
}

export default App;