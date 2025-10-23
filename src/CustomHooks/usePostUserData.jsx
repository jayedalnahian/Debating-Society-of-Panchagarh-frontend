import axios from "axios";
import React from "react";
import url from "../baseURL";
import { useMutation } from "@tanstack/react-query";
import useAuth from "./UseAuth";

const usePostUserData = () => {
    const {registerUser} = useAuth();
  const { mutate, isLoading } = useMutation({
    mutationFn: async ({ name, email, password }) => {
      console.log(name, email, password);

      const userData = await registerUser(email, password);
      console.log("Registered user data:", userData);
      if (!userData) {
        return;
      }

      const response = await axios.post(`${url}users`, {
        name,
        email,
      });
      return response.data;
    },
    onSuccess: (data) => {
      console.log("User data posted successfully:", data);
    },
    onError: (error) => {
      console.error("Error posting user data:", error);
    },
  });

  return { mutate, isLoading };
};

export default usePostUserData;
