import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const {
    registerUser,
    userLoading,
    googleLogin,
    user,
    setUser,
    logOut,
    loading,
    setLoading,
  } = useContext(AuthContext);

  return {
    registerUser,
    userLoading,
    googleLogin,
    user,
    setUser,
    logOut,
    loading,
    setLoading,
  };
};

export default useAuth;
