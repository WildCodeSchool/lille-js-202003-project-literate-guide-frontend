import React from 'react';
import ListIcon from '@material-ui/icons/List';
import { Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Leaflet from '../map/Map';
import '../../App.scss';
import './Explore.scss';

const ListButtonStyles = makeStyles((theme) => ({
  root: {
    zIndex: 20,
    position: 'absolute',
    bottom: theme.spacing(11),
    right: theme.spacing(2),
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

function Explore() {
  const classes = ListButtonStyles();

  return (
    <div className="content">
      <div className="explore">
        <div className="mapWrap">
          <Leaflet />
        </div>
        <Fab
          component={Link}
          to="/"
          color="secondary"
          className={classes.root}
          aria-label="change"
        >
          <ListIcon color="primary" />
        </Fab>
      </div>
    </div>
  );
}

export default Explore;
