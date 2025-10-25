import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import url from "../baseURL";

const useUpdateAnnouncement = () => {
  const queryClient = useQueryClient();

  const { mutate: updateAnnouncement, isLoading } = useMutation({
    mutationFn: async ({ id, updatedData }) => {
      const response = await axios.put(`${url}announcements/${id}`, updatedData);
      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["announcements"] });
      alert("Announcement updated successfully!");
    },

    onError: (error) => {
      alert("Failed to update announcement: " + error.message);
    },
  });

  return { updateAnnouncement, isLoading };
};

export default useUpdateAnnouncement;
