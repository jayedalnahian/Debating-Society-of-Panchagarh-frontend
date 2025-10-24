import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import url from '../baseURL';


const useAddEvent = () => {
    const queryClient = useQueryClient();
    const {mutate, isLoading} = useMutation({
        mutationFn: async (newEvent) => {
            const response = await axios.post(`${url}events`, newEvent);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["events"])
            alert('Event added successfully!');
        },
        onError: (error) => {
            
            alert(`Error: ${error.message}`);
        }
    });

    return (
        {mutate, isLoading}
    );
};

export default useAddEvent;