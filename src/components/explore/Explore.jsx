import React from 'react';
import ListIcon from '@material-ui/icons/List';
import MapIcon from '@material-ui/icons/Map';
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
}));

function Explore() {
  const [checked, setChecked] = React.useState(false);
  const classes = ListButtonStyles();
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div>
      <Leaflet />
      {checked ? (
        <Fab
          component={Link}
          to="capsule"
          color="secondary"
          className={classes.root}
          aria-label="change"
          onClick={handleChange}
        >
          <MapIcon color="primary" />
        </Fab>
      ) : (
        <Fab
          color="secondary"
          className={classes.root}
          aria-label="change"
          onClick={handleChange}
        >
          <ListIcon color="primary" />
        </Fab>
      )}
    </div>
  );
}

export default Explore;
