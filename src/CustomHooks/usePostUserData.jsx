import axios from "axios";
import React from "react";
import url from "../baseURL";
import { useMutation } from "@tanstack/react-query";
import useAuth from "./UseAuth";
import { useNavigate } from "react-router";

const usePostUserData = () => {
  const { registerUser } = useAuth();
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationFn: async ({ name, email, password, joinDate}) => {
      const userData = await registerUser(email, password);
      if (!userData) {
        alert("Registration failed during authentication!");
        return;
      }

      const role = "regular user";
      const response = await axios.post(`${url}users`, {
        name,
        email,
        role,
        joinDate
      });
      return response.data;
    },
    onSuccess: () => {
      alert("User registered successfully!");
      navigate("/");

    },
    onError: (error) => {
      alert("User is not registered successfully!: " + error.message);
    },
  });

  return { mutate, isLoading };
};

export default usePostUserData;
