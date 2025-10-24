import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import url from '../baseURL';

const useGetAllEvents = () => {
    const queryClient = useQueryClient();
    const {data, isLoading, error} = useQuery({
        queryKey: ['events'],
        queryFn: async () => {
            const response = await axios.get(url + 'events');
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["events"]);
            console.log('Events fetched successfully!');
        },
        onError: (error) => {
            alert(`Error: ${error.message}`);
        }
    });

    


            
    return (
        {
            data,
            isLoading,
            error
        }
    );
};

export default useGetAllEvents;