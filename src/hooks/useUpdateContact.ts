import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { Contact } from '../types/contacts.types';

/**
 * Fires an HTTP PUT to update individual contact based on id, and contact passed to it, and invalidates the contacts query to refetch after success
 */
export const useUpdateContact = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (contact: Contact) => {
      return axios.put(
        `${import.meta.env.VITE_BASE_API_URL}${contact.id}`,
        contact,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries('contacts');
    },
  });

  return mutation.mutate;
};
