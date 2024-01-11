import React, { useEffect } from "react";
import AppLayout from "./components/layout/AppLayout.jsx";
import routes from "./utilities/RouteList.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import UserStore from "./utilities/UserStore.js";
import Cookies from "js-cookie";
import ProtectedRoute from "./utilities/ProtectedRoute.jsx";
import { observer } from "mobx-react-lite";

const App = () => {
  const { currentUser } = UserStore;

  useEffect(() => {
    UserStore.loadData();
  }, []);

  return (
    <Router>
      <AppLayout user={currentUser}>
        <Routes>
          {routes.map((route) => {
            if (route.private)
              return (
                <Route
                  path={route.path}
                  element={
                    <ProtectedRoute user={Cookies.get("uid")}>
                      {route.element}
                    </ProtectedRoute>
                  }
                />
              );
            else return <Route path={route.path} element={route.element} />;
          })}
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default observer(App);
