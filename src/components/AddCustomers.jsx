import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';

export default function MyCustomerForm({ saveCustomer }) {
  const [myCustomer, setMyCustomer] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    postcode: '',
    city: '',
    phone: '',
  });

  const handleChange = (event) => {
    setMyCustomer({ ...myCustomer, [event.target.name]: event.target.value });
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCloseDialog = () => setIsDialogOpen(false);
  const handleOpenDialog = () => setIsDialogOpen(true);

  const handleSaveCustomer = () => {
    saveCustomer(myCustomer);
    handleCloseDialog();
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Button variant="contained" color="success" size="large" style={{ margin: '12px', backgroundColor: '#03DE44' }} onClick={handleOpenDialog}>
        Add Customer
      </Button>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog} style={{ textAlign: 'center', width: 'auto' }}>
        <DialogTitle>New Customer</DialogTitle>
        <DialogContent>
          {Object.keys(myCustomer).map((input) => (
            <TextField
              key={input}
              autoFocus
              margin="dense"
              name={input}
              label={input.charAt(0).toUpperCase() + input.slice(1)}
              type="text"
              fullWidth
              variant="outlined"
              onChange={handleChange}
              style={{ margin: '12px' }}
              InputProps={{ style: { textAlign: 'center' } }}
            />
          ))}
        </DialogContent>
        <DialogActions style={{ justifyContent: 'center' }}>
          <Button variant="contained" color="success" size="large" style={{ margin: '12px', backgroundColor: '#03DE44' }} onClick={handleSaveCustomer}>
            Add
          </Button>
          <Button variant="outlined" color="warning" size="large" style={{ margin: '12px', color: '#DE0344' }} onClick={handleCloseDialog}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
