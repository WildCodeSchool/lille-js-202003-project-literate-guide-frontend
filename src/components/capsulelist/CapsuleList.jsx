import React, { useState, useEffect } from 'react';
import MapIcon from '@material-ui/icons/Map';
import axios from 'axios';
import { Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const ListButtonStyles = makeStyles((theme) => ({
  root: {
    zIndex: 20,
    position: 'absolute',
    bottom: theme.spacing(11),
    right: theme.spacing(2),
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
      {capsules[0] && (
        <div>
          <h2>{capsules[0].capsule_name}</h2>
          <p>{capsules[0].description}</p>
          <Fab
            component={Link}
            to="/"
            color="secondary"
            className={classes.root}
            aria-label="change"
          >
            <MapIcon color="primary" />
          </Fab>
        </div>
      )}
    </>
  );
};

export default CapsuleList;
