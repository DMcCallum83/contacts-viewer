import Button from '@mui/material/Button';
import { useDeleteContact } from '../../hooks/useDeleteContact';
import { Contact } from '../../types/contacts.types';
import styles from './Modals.module.scss';
import { StyledModal } from './_shared/StyledModal';

interface DeleteContactModalProps {
  contact: Contact;
  open: boolean;
  onClose: () => void;
}
export const DeleteContactModal = ({
  contact,
  open,
  onClose,
}: DeleteContactModalProps) => {
  const deleteContactMutation = useDeleteContact();

  const handleConfirm = () => {
    deleteContactMutation(contact.id);
    onClose();
  };

  return (
    <StyledModal open={open}>
      <h1 className={styles.title}>Delete Contact?</h1>
      <p className={styles.description}>
        Are you sure you want to delete the following contact?:
      </p>
      <span className={styles.detail}>{contact.name}</span>
      <div className={styles.buttonsWrapper}>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          Cancel
        </Button>
        <Button onClick={handleConfirm}>Delete</Button>
      </div>
    </StyledModal>
  );
};
