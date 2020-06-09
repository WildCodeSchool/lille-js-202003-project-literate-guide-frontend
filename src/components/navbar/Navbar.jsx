import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TuneIcon from '@material-ui/icons/Tune';
import { IconButton } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from './UseStyles';

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static" className={classes.navBar}>
        <Toolbar className={classes.menuTool}>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <img src="/logo.png" alt="logo" className={classes.img} />
          <IconButton color="inherit">
            <TuneIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
