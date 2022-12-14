import './App.css';
import * as React from 'react';
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import ButtonGroup from '@material-ui/core/ButtonGroup';
export function App()
{
  return(
    <div>
  <div className='App'>
  {/* <ButtonGroup variant="contained">
  <Button endIcon={<LoginIcon />} color="primary">
    Login
  </Button>
  <Button startIcon={<LogoutIcon />} color="secondary">
    Logout
  </Button>
</ButtonGroup> */}
  </div>
  </div>
  );
}