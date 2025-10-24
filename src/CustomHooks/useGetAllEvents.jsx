import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import url from '../baseURL';

const useGetAllEvents = () => {
    const {data, isLoading, error} = useQuery({
        queryKey: ['events'],
        queryFn: async () => {
            const response = await axios.get(url + 'events');
            return response.data;
        },
        onSuccess: () => {
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