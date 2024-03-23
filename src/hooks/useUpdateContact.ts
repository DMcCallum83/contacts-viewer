import axios from "axios";
import { useQuery } from "react-query";
import { Contact } from "../types/contacts.types";

/**
 * Fires an HTTP PUT to update individual contact based on id, and contact passed to it
 * @returns `data: Contact, isLoading, isError`
 */
export const useUpdateConact = (id: string, contact: Contact) => {
  return useQuery<Contact, Error>("contact", async () => {
    const response = await axios.put(
      `${import.meta.env.VITE_BASE_API_URL}${id}`,
      contact,
    );

    return response.data;
  });
};
