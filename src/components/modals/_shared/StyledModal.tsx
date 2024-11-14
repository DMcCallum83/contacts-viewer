import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const boxStyle = {
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

const modalStyle = {
  height: '100vh',
};

interface StyledModalProps {
  open: boolean;
  children: JSX.Element | JSX.Element[];
}

export function StyledModal({ open, children }: StyledModalProps) {
  return (
    <Modal open={open} sx={modalStyle}>
      <Box sx={boxStyle}>{children}</Box>
    </Modal>
  );
}
