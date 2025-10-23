import React from "react";
import useAuth from "./UseAuth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const useLogin = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationFn: async ({ email, password }) => {
      const userData = await loginUser(email, password);
      return userData;
    },
    onSuccess: () => {
      alert("User logged in successfully!");
      navigate("/");
    },
    onError: (error) => {
      alert("Login failed!: " + error.message);
    },
  });

  return { mutate, isLoading };
};

export default useLogin;
