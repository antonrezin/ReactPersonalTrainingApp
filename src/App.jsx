import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TabApp from './components/NavTab';
import './App.css';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ flexGrow: 1, textAlign: 'center', backgroundColor: '#fff', padding: '16px', color: 'white' }}>
        <AppBar position="static" sx={{ backgroundColor: '#03DE44' }}>
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              <strong>Personal Training App</strong>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <TabApp />
    </LocalizationProvider>
  );
}

export default App;
