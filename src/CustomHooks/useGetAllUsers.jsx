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
    
    },
    onError: (error) => {
      alert(`Error: ${error.message}`);
    },
  });

  
  

  return { data, isLoading };
};

export default useGetAllUsers;
