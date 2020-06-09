import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TuneIcon from '@material-ui/icons/Tune';
import { IconButton } from '@material-ui/core';

const style = {
  background: 'linear-gradient(45deg, #F15348 30%, #DA7B2F 90%)',
  color: 'white',
};
export default function Navbar() {
  return (
    <div>
      <AppBar position="static" style={style}>
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <TuneIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
