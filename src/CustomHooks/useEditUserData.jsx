import React from 'react';
import url from '../baseURL';
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useEditUserData = () => {
    const queryClient = useQueryClient();
    const {mutate, isLoading}  = useMutation({
        mutationFn: async (updatedData) => {
            const response = await axios.put(`${url}users/${updatedData._id}`, updatedData);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['allUsers'] });
            alert('User data updated successfully!');
        },
        onError: (error) => {
            alert('Failed to update user data: ' + error.message);
        },
    });
    return (
        {mutate, isLoading}
    );
};

export default useEditUserData;