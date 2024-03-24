import { Contacts } from "../components/Contacts/Contacts";
import styles from "./_shared.module.scss";

export function ContactsPage() {
  return (
    <section className={styles.section}>
      <h1 className={styles.sectionTitle}>Contacts List</h1>
      <Contacts />
    </section>
  );
}
