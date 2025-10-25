import axios from 'axios';
import React from 'react';
import url from '../baseURL';
import { useQuery } from '@tanstack/react-query';

const useGetOverview = () => {

    const {data, isLoading}  = useQuery({
        queryKey: ['overview'],
        queryFn: async () => {
            const response = await axios.get(`${url}overview-stats`);
            return response.data;
        },
        onError: (error) => {
            alert('Failed to fetch overview data: ' + error.message);
        },
    });
    return {data, isLoading};
};

export default useGetOverview;