import React from 'react';
import ListIcon from '@material-ui/icons/List';
import MapIcon from '@material-ui/icons/Map';
import { Fab } from '@material-ui/core';
import listButtonStyles from './ListButtonStyle';

export default function ListButton() {
  const classes = listButtonStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <Fab className={classes.root} aria-label="add" onClick={handleChange}>
      {checked ? <MapIcon color="primary" /> : <ListIcon color="primary" />}
    </Fab>
  );
}
