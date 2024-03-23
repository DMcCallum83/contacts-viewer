import axios from "axios";
import { useQuery } from "react-query";
import { Contact } from "../types/contacts.types";

export const useGetContacts = () => {
  return useQuery<any, Error>("contacts", async () => {
    const response = await axios.get(
      "https://65f89044df151452460fb148.mockapi.io/api/v1/contacts/",
    );

    return response.data as Contact[];
  });
};
