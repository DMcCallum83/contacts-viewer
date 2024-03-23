import { useGetContacts } from "../../hooks/useGetContacts";

export function Contacts() {
  const { data, isLoading, isError } = useGetContacts();

  if (isLoading) {
    return <span>LOADING...</span>;
  }
  if (isError) {
    return <span>Whoops something went wrong...</span>;
  }

  return data?.map((contact) => <span key={contact.name}>{contact.name}</span>);
}
