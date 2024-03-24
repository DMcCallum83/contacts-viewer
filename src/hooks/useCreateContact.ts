import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { NewContact } from '../types/contacts.types';

/**
 * Fires an HTTP POST to create a new contact based on and contact object passed to it, and invalidates the contacts query to refetch after success
 */
export const useCreateConact = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newContact: NewContact) => {
      return axios.post(`${import.meta.env.VITE_BASE_API_URL}`, newContact);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('contacts');
    },
  });

  return mutation.mutate;
};
