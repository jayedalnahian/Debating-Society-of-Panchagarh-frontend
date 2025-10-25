import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import url from '../baseURL';

const useGetAllAnnouncement = () => {
    const {data, isLoading}  = useQuery({
        queryKey: ['announcements'],
        queryFn: async () => {
            const response = await axios.get(`${url}announcements`);
            return response.data;
        },
        onError: (error) => {
            alert('Failed to fetch announcements: ' + error.message);
        },
    });

    return {data, isLoading};
};

export default useGetAllAnnouncement;