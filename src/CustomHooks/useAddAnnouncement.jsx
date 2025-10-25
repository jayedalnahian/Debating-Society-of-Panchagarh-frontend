import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import url from '../baseURL';

const useAddAnnouncement = () => {
    const queryClient = useQueryClient();
    const {mutate, isLoading}  = useMutation({
        mutationFn: async (newAnnouncement) => {
            const response = await axios.post(`${url}announcements`, newAnnouncement);  
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['announcements'] });
            alert('Announcement added successfully!');
        },
        onError: (error) => {
            alert('Failed to add announcement: ' + error.message);
        },
    });


    return {mutate, isLoading};
};

export default useAddAnnouncement;