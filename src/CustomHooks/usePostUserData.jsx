import axios from "axios";
import React from "react";
import url from "../baseURL";
import { useMutation } from "@tanstack/react-query";
import useAuth from "./UseAuth";

const usePostUserData = () => {
  const { registerUser } = useAuth();
  const { mutate, isLoading } = useMutation({
    mutationFn: async ({ name, email, password }) => {
      const userData = await registerUser(email, password);
      if (!userData) {
        alert("Registration failed during authentication!");
        return;
      }
      const response = await axios.post(`${url}users`, {
        name,
        email,
      });
      return response.data;
    },
    onSuccess: () => {
      alert("User registered successfully!");
    },
    onError: (error) => {
      alert("User is not registered successfully!: " + error.message);
    },
  });

  return { mutate, isLoading };
};

export default usePostUserData;
