import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { IconButton, SwipeableDrawer } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Toolbar from '@material-ui/core/Toolbar';
import TuneIcon from '@material-ui/icons/Tune';
import NavBarStyles from './NavbarStyles';
import TabTag from '../tabtag/TabTag';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    setOpen(true);
  };
  const closeDrawer = () => {
    setOpen(false);
  };

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
          <IconButton onClick={openDrawer} color="inherit">
            <TuneIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div>
        <SwipeableDrawer anchor="right" open={open} onClose={closeDrawer}>
          <TabTag />
        </SwipeableDrawer>
      </div>
    </div>
  );
}
