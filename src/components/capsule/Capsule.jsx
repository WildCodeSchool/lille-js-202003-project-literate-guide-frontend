import React from 'react';
import { Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ListIcon from '@material-ui/icons/List';
import MapIcon from '@material-ui/icons/Map';

const ListButtonStyles = makeStyles((theme) => ({
  root: {
    zIndex: 20,
    position: 'absolute',
    bottom: theme.spacing(11),
    right: theme.spacing(2),
  },
}));

function Capsule() {
  const [checked, setChecked] = React.useState(false);
  const classes = ListButtonStyles();
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div>
      <p>Capsule</p>
      {checked ? (
        <Fab
          component={Link}
          to="/"
          color="secondary"
          className={classes.root}
          aria-label="change"
          onClick={handleChange}
        >
          <ListIcon color="primary" />
        </Fab>
      ) : (
        <Fab
          color="secondary"
          className={classes.root}
          aria-label="change"
          onClick={handleChange}
        >
          <MapIcon color="primary" />
        </Fab>
      )}
    </div>
  );
}

export default Capsule;
