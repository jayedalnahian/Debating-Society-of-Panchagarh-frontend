import React from "react";
import useAuth from "../CustomHooks/UseAuth";
import Loading from "../components/LoadingPage/Loading";
import { Navigate, useLocation } from "react-router";

const PrivateProtectedRoute = ({ children }) => {
  const { user, userLoading } = useAuth();
  const location = useLocation();

  // Still loading auth state
  if (userLoading) {
    return <Loading />;
  }

  // If user is not logged in
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If user is not admin (protecting dashboard)
  if (user?.uid !== import.meta.env.VITE_ADMIN_UID) {
    return <Navigate to="/" replace />;
  }

  // ✅ Otherwise, render the protected component
  return children;
};

export default PrivateProtectedRoute;
