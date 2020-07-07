import React, { useState, useEffect } from 'react';
import MapIcon from '@material-ui/icons/Map';
import axios from 'axios';
import { Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Capsule from '../capsule/Capsule';
import './CapsuleList.scss';

const ListButtonStyles = makeStyles((theme) => ({
  root: {
    zIndex: 20,
    position: 'absolute',
    bottom: theme.spacing(11),
    right: theme.spacing(2),
  },
  table: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const CapsuleList = () => {
  const classes = ListButtonStyles();
  const [capsules, setCapsules] = useState([]);

  const getCapsules = () => {
    axios
      .get('http://localhost:8000/capsules')
      .then((res) => {
        setCapsules(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCapsules();
  }, []);

  return (
    <>
      {capsules && (
        <div className={classes.table}>
          {capsules.map((capsule, index) => (
            <Capsule key={index} capsule={capsule} />
          ))}
        </div>
      )}
      <Fab
        component={Link}
        to="/"
        color="secondary"
        className={classes.root}
        aria-label="change"
      >
        <MapIcon color="primary" />
      </Fab>
    </>
  );
};

export default CapsuleList;
