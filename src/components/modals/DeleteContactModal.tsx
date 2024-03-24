import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useDeleteContact } from '../../hooks/useDeleteContact';
import { Contact } from '../../types/contacts.types';
import styles from './Modals.module.scss';

const box = {
  background: 'white',
  width: '75%',
  maxWidth: '500px',
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '0 2rem 2rem',
  borderRadius: '12px',
  outline: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const modal = {
  height: '100vh',
};

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
    <Modal open={open} sx={modal}>
      <Box sx={box}>
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
      </Box>
    </Modal>
  );
};
