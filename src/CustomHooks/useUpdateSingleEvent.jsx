import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import url from "../baseURL";

const useUpdateSingleEvent = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: async ({ id, updatedEvent }) => {
      const response = await axios.put(`${url}events/${id}`, updatedEvent);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["events"]);
      alert("✅ Event updated successfully!");
    },
    onError: (error) => {
      console.error("Error updating event:", error);
      alert(`❌ Error: ${error.message}`);
    },
  });

  return { mutate, isLoading };
};

export default useUpdateSingleEvent;
