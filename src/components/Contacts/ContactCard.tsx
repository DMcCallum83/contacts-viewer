import { useState } from "react";
import { Contact } from "../../types/contacts.types";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import { FaBirthdayCake, FaRegTrashAlt } from "react-icons/fa";
import styles from "./ContactCard.module.scss";
import clsx from "clsx";
import { deriveBirthday } from "./helpers";
import { useDeleteContact } from "../../hooks/useDeleteContact";

interface ContactCardProps {
  contact: Contact;
}

export function ContactCard({ contact }: ContactCardProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const deleteContactMutation = useDeleteContact();

  const handleDelete = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    deleteContactMutation(contact.id);
  };

  return (
    <div
      className={clsx(styles.card, isExpanded && styles.isActive)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className={styles.basic}>
        <img
          className={styles.avatar}
          alt={`${contact.name}'s Avatar`}
          src={contact.avatar}
        />
        <span className={styles.name}>{contact.name}</span>
      </div>

      <div className={clsx(styles.details, isExpanded && styles.expanded)}>
        <div className={styles.detailsLine}>
          <FaPhone size={"1.25rem"} />
          <span>{contact.phone}</span>
        </div>
        <div className={styles.detailsLine}>
          <FaEnvelope size={"1.25rem"} />
          <span>{contact.email}</span>
        </div>
        <div className={styles.detailsLine}>
          <FaBirthdayCake size={"1.25rem"} />
          <span>{deriveBirthday(contact.birthday)}</span>
        </div>
      </div>
      <div className={styles.delete} onClick={(e) => handleDelete(e)}>
        <FaRegTrashAlt size={"1.25rem"} />
      </div>
    </div>
  );
}
