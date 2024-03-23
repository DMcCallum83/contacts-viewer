import { useGetContacts } from "../../hooks/useGetContacts";
import { ContactCard } from "./ContactCard";
import styles from "./Contacts.module.scss";

export function Contacts() {
  const { data, isLoading, isError } = useGetContacts();

  if (isLoading) {
    return <span>LOADING...</span>;
  }
  if (isError) {
    return <span>Whoops something went wrong...</span>;
  }

  return (
    <div className={styles.contactsList}>
      {data
        ?.sort((a, b) => a.name.localeCompare(b.name))
        .map((contact) => <ContactCard contact={contact} key={contact.name} />)}
    </div>
  );
}
