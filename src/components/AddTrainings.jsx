import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';

export default function MyCustomizedTrainingForm(props) {
  const [myTraining, setMyTraining] = useState({
    customer: props.customer.links[1].href,
    activity: '',
    duration: '',
    date: '',
  });

  const handleDateChange = (value) => {
    setMyTraining({ ...myTraining, date: value.toISOString() });
  };

  const handleChange = (event) => {
    setMyTraining({ ...myTraining, [event.target.name]: event.target.value });
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleSaveTraining = () => {
    props.saveTraining(myTraining);
    setIsDialogOpen(false);
  };

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Add Training</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="activity"
            label="Activity"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(event) => handleChange(event)}
          />
          <TextField
            autoFocus
            margin="dense"
            name="duration"
            label="Duration in Minutes"
            type="number"
            fullWidth
            variant="outlined"
            onChange={(event) => handleChange(event)}
          />
          <DateTimeField
            autoFocus
            margin="dense"
            name="date"
            label="Date / Time"
            fullWidth
            variant="standard"
            format="DD-MM-YYYY HH:mm"
            onChange={(value) => handleDateChange(value)}
          />
        </DialogContent>
        <DialogActions style={{ justifyContent: 'center' }}>
          <Button variant="contained" color="success" style={{ backgroundColor: '#03DE44', color: '#fff' }} size="large" onClick={handleSaveTraining}>
            Add
          </Button>
          <Button variant="outlined" color="warning" style={{ color: '#DE0344' }} size="large" onClick={handleCloseDialog}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Button variant="contained" style={{ backgroundColor: '#03de44', color: '#fff' }} size="medium" onClick={handleOpenDialog}>
        Add
      </Button>
    </div>
  );
}
