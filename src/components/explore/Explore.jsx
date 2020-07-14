import React from 'react';
import ListIcon from '@material-ui/icons/List';
import { Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Leaflet from '../map/Map';

const ListButtonStyles = makeStyles((theme) => ({
  root: {
    zIndex: 20,
    position: 'absolute',
    bottom: theme.spacing(11),
    right: theme.spacing(2),
  },
  mapContainer: {
    height: '85vh',
  },
}));

function Explore() {
  const classes = ListButtonStyles();

  return (
    <div className={classes.mapContainer}>
      <Leaflet />
      <Fab
        component={Link}
        to="/capsules"
        color="secondary"
        className={classes.root}
        aria-label="change"
      >
        <ListIcon color="primary" />
      </Fab>
    </div>
  );
}

export default Explore;
