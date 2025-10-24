import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import url from "../baseURL";

const useGetAllUsers = () => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axios.get(url + "users");
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      console.log("Users fetched successfully!");
    },
    onError: (error) => {
      alert(`Error: ${error.message}`);
    },
  });

  console.log(data);
  

  return { data, isLoading };
};

export default useGetAllUsers;
