import React from 'react';
import ListIcon from '@material-ui/icons/List';
import { Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const listButtonStyles = makeStyles({
  root: {
    background: '#FFFFFF',
    zIndex: 2,
    position: 'absolute',
    bottom: '90px',
    right: '27px',
  },
});

export default function ListButton() {
  const classes = listButtonStyles();
  return (
    <Fab className={classes.root} aria-label="add">
      <ListIcon color="primary" />
    </Fab>
  );
}
