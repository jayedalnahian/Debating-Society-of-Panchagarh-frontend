import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import url from "../baseURL";

const useDeleteAnnouncement = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteAnnouncement, isLoading } = useMutation({
    mutationFn: async (id) => {
      const response = await axios.delete(`${url}announcements/${id}`);
      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["announcements"] });
      alert("Announcement deleted successfully!");
    },

    onError: (error) => {
      alert("Failed to delete announcement: " + error.message);
    },
  });

  return { deleteAnnouncement, isLoading };
};

export default useDeleteAnnouncement;
