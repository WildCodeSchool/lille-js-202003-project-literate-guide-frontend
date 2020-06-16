import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { IconButton, SwipeableDrawer, Button } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Toolbar from '@material-ui/core/Toolbar';
import TuneIcon from '@material-ui/icons/Tune';
import NavBarStyles from './NavbarStyles';

export default function NavBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(true);
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
          <IconButton onClick={toggleDrawer} color="inherit">
            <TuneIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div>
        <SwipeableDrawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
        >
          <div className={classes.tags}>
            <div>
              <h2 className={classes.title}>
                Choississez vos centres intérêts
              </h2>
            </div>
            <hr className={classes.hr} />
            <div>
              <h2 className={classes.subTitle}>Types</h2>
            </div>
            <div>
              <ul>
                <li className={classes.subTag}>
                  <Button className={classes.butt}>Quartier</Button>
                  <Button className={classes.butt}>Place</Button>
                  <Button className={classes.butt}>Rue</Button>
                  <Button className={classes.butt}>Monument</Button>
                  <Button className={classes.butt}>Musée</Button>
                  <Button className={classes.butt}>Parc</Button>
                  <Button className={classes.butt}>Street Art</Button>
                  <Button className={classes.butt}>Curiosité</Button>
                </li>
              </ul>
            </div>
            <div>
              <h2 className={classes.subTitle}>Styles</h2>
            </div>
            <div>
              <ul>
                <li className={classes.subTag}>
                  <Button className={classes.butt}>Enfants</Button>
                  <Button className={classes.butt}>Humous</Button>
                  <Button className={classes.butt}>Quizz</Button>
                  <Button className={classes.butt}>Teaser</Button>
                  <Button className={classes.butt}>Name</Button>
                </li>
              </ul>
            </div>
          </div>
        </SwipeableDrawer>
      </div>
    </div>
  );
}
