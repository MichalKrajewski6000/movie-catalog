import React from "react";
import AppLayout from "./components/layout/AppLayout.jsx";
import routes from "./utilities/RouteList.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <AppLayout>
      <Router>
        <Routes>
          {routes.map((route) => {
            return <Route path={route.path} element={route.element} />;
          })}
        </Routes>
      </Router>
    </AppLayout>
  );
};

export default App;
