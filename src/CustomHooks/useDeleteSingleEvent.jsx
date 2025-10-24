import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import url from '../baseURL';

const useDeleteSingleEvent = () => {
    const queryClient = useQueryClient();
    const {mutate, isLoading} = useMutation({
        mutationFn: async (eventId) => {
            const response = await axios.delete(`${url}events/${eventId}`);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["events"]);
            alert('Event deleted successfully!');
        },
        onError: (error) => {
            alert(`Error: ${error.message}`);
        }
    });




    return (
        {mutate, isLoading}
    );
};

export default useDeleteSingleEvent;