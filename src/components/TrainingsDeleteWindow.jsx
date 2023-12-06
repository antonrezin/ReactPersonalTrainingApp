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
    const deleteUrl = `https://traineeapp.azurewebsites.net/api/trainings/${props.training.id}`;
    props.deleteTraining(deleteUrl);
    setIsOpen(false);
  };

  return (
    <div>
      <MyButton
        variant="contained"
        style={{ backgroundColor: '#DE0344', color: '#fff' }}
        onClick={handleOpen}
      >
        Delete
      </MyButton>
      <MyDialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="my-alert-dialog-title"
        aria-describedby="my-alert-dialog-description"
      >
        <MyDialogTitle id="my-alert-dialog-title">{"Delete"}</MyDialogTitle>
        <MyDialogContent>
          <MyDialogContentText id="my-alert-dialog-description">
            Confirm Deleting
          </MyDialogContentText>
        </MyDialogContent>
        <MyDialogActions>
          <MyButton style={{ color: '#DE0344' }} onClick={handleDelete} autoFocus>Delete</MyButton>
          <MyButton style={{ color: '#03DE44' }} onClick={handleClose}>Cancel</MyButton>
        </MyDialogActions>
      </MyDialog>
    </div>
  );
}
