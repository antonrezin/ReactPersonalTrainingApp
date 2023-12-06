import { useState } from 'react';
import MyButton from '@mui/material/Button';
import MyTextField from '@mui/material/TextField';
import MyDialog from '@mui/material/Dialog';
import MyDialogActions from '@mui/material/DialogActions';
import MyDialogContent from '@mui/material/DialogContent';
import MyDialogTitle from '@mui/material/DialogTitle';

export default function MyEditCustomer(props) {
  const [editedCustomer, setEditedCustomer] = useState({
    firstname: '',
    lastname: '',
    streetaddress: '',
    postcode: '',
    city: '',
    phone: ''
  });

  const { updateCustomer } = props;

  const handleChange = (event) => {
    setEditedCustomer({ ...editedCustomer, [event.target.name]: event.target.value });
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setEditedCustomer(props.customer);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSave = () => {
    const href = props.customer.links[0].href.replace('http', 'https');
    updateCustomer(href, editedCustomer);
    setIsOpen(false);
  };

  return (
    <div>
      <MyButton variant="contained" color="primary" onClick={handleOpen} sx={{ mx: 'auto', display: 'block' }}>
        Edit
      </MyButton>
      <MyDialog open={isOpen} onClose={handleClose}>
        <MyDialogTitle sx={{ textAlign: 'center', backgroundColor: '#03DE44', color: '#fff', padding: '1rem' }}>
          <strong>Edit Customer Information</strong>
        </MyDialogTitle>
        <MyDialogContent sx={{ textAlign: 'center', padding: '1rem' }}>
          <MyTextField
            autoFocus
            margin="dense"
            name="firstname"
            value={editedCustomer.firstname}
            label="Firstname"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(event) => handleChange(event)}
          />
          <MyTextField
            autoFocus
            margin="dense"
            name="lastname"
            value={editedCustomer.lastname}
            label="Lastname"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(event) => handleChange(event)}
          />
          <MyTextField
            autoFocus
            margin="dense"
            name="streetaddress"
            value={editedCustomer.streetaddress}
            label="Street address"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(event) => handleChange(event)}
          />
          <MyTextField
            autoFocus
            margin="dense"
            name="postcode"
            value={editedCustomer.postcode}
            label="Postcode"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(event) => handleChange(event)}
          />
          <MyTextField
            autoFocus
            margin="dense"
            name="city"
            value={editedCustomer.city}
            label="City"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(event) => handleChange(event)}
          />
          <MyTextField
            autoFocus
            margin="dense"
            name="phone"
            value={editedCustomer.phone}
            label="Phone"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(event) => handleChange(event)}
          />
        </MyDialogContent>
        <MyDialogActions sx={{ justifyContent: 'center', padding: '1rem' }}>
          <MyButton
            onClick={handleSave}
            variant="contained"
            sx={{
              backgroundColor: '#03DE44',
              color: '#fff',
              ':hover': {
                backgroundColor: '#00A859',
              },
            }}
          >
            Save
          </MyButton>
          <MyButton onClick={handleClose} variant="outlined" color="error">
            Cancel
          </MyButton>
        </MyDialogActions>
      </MyDialog>
    </div>
  );
}
