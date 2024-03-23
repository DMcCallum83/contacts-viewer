import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

/**
 * Fires an HTTP DELETE to delete a contact based on the id passed in, and invalidates the contacts query to refetch after success
 */
export const useDeleteContact = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: string) => {
      return axios.delete(`${import.meta.env.VITE_BASE_API_URL}${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("contacts");
    },
  });

  return mutation.mutate;
};
