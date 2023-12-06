import { useState } from 'react';
import MyButton from '@mui/material/Button';
import MyDialog from '@mui/material/Dialog';
import MyDialogActions from '@mui/material/DialogActions';
import MyDialogContent from '@mui/material/DialogContent';
import MyDialogContentText from '@mui/material/DialogContentText';
import MyDialogTitle from '@mui/material/DialogTitle';

export default function MyDeleteAlert(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDelete = () => {
    const href = props.customer.links[0].href.replace('http', 'https');
    props.deleteCustomer(href);
    setIsOpen(false);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <MyButton variant="contained" color="error" onClick={handleOpen}>
        Delete
      </MyButton>
      <MyDialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="my-alert-dialog-title"
        aria-describedby="my-alert-dialog-description"
      >
        <MyDialogTitle id="my-alert-dialog-title" style={{ backgroundColor: '#03DE44', color: '#fff' }}>
          {"Delete"}
        </MyDialogTitle>
        <MyDialogContent>
          <MyDialogContentText id="my-alert-dialog-description">
            Confirm Deleting Customer
          </MyDialogContentText>
        </MyDialogContent>
        <MyDialogActions style={{ justifyContent: 'center', padding: '1rem' }}>
          <MyButton
            style={{ backgroundColor: '#03DE44', color: '#fff', ':hover': { backgroundColor: '#00A859' } }}
            onClick={handleDelete}
            autoFocus
          >
            Delete
          </MyButton>
          <MyButton onClick={handleClose} variant="outlined" color="error">
            Cancel
          </MyButton>
        </MyDialogActions>
      </MyDialog>
    </div>
  );
}
