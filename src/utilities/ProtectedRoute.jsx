import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
  if (user) return children;

  return <Navigate to="/login" />;
};

export default ProtectedRoute;
