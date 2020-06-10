import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { IconButton } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Toolbar from '@material-ui/core/Toolbar';
import TuneIcon from '@material-ui/icons/Tune';
import NavBarStyles from './NavbarStyles';

export default function NavBar() {
  const classes = NavBarStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static" className={classes.navBar}>
        <Toolbar className={classes.menuTool}>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <img src="/images/logo.png" alt="logo" className={classes.img} />
          <IconButton color="inherit">
            <TuneIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
