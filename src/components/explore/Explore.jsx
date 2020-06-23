import React from 'react';
import ListIcon from '@material-ui/icons/List';
import { Fab, Grid } from '@material-ui/core';
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
}));

function Explore() {
  const classes = ListButtonStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={12} direction="column">
          <Leaflet />
        </Grid>
        <Grid item xs={12} direction="column">
          <Fab
            component={Link}
            to="/capsules"
            color="secondary"
            className={classes.root}
            aria-label="change"
          >
            <ListIcon color="primary" />
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
}

export default Explore;
