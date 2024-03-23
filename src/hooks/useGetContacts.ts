import axios from "axios";
import { useQuery } from "react-query";
import { Contact } from "../types/contacts.types";

/**
 * Fires an HTTP GET to rerieve contacts data
 * @returns `data: Contact[], isLoading, isError`
 */
export const useGetContacts = () => {
  return useQuery<Contact[], Error>("contacts", async () => {
    const response = await axios.get(import.meta.env.VITE_BASE_API_URL);

    return response.data;
  });
};
