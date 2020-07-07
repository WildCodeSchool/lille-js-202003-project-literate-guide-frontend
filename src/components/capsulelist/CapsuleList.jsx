import React, { useState, useEffect } from 'react';
import MapIcon from '@material-ui/icons/Map';
import axios from 'axios';
import { Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Capsule from '../capsule/Capsule';

const ListButtonStyles = makeStyles((theme) => ({
  root: {
    zIndex: 20,
    position: 'fixed',
    bottom: theme.spacing(11),
    right: theme.spacing(2),
  },
  table: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 70,
  },
  poiTitle: {
    color: '#F15348',
    fontWeight: 'bold',
    fontSize: 18,
  },
  capsuleContainer: {
    display: 'flex',
  },
  // hr: {
  //   width: '90%',
  //   marginTop: 20,
  //   border: '0.5px solid #F15348',
  // },
}));

const CapsuleList = () => {
  const classes = ListButtonStyles();
  const [capsules, setCapsules] = useState([]);
  const [poi, setPoi] = useState([]);

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

  const getPoi = () => {
    axios
      .get('http://localhost:8000/poi')
      .then((res) => {
        setPoi(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCapsules();
    getPoi();
  }, []);

  /* <Typography className={classes.poiTitle}>{capsule.poi_name}</Typography> */
  /* {capsules && (
        <div className={classes.table}>
          {capsules.map((capsule, index) => (
            <Capsule key={index} capsule={capsule} />
          ))}
        </div> */

  return (
    <>
      {poi && (
        <div className={classes.table}>
          {poi.map((poi, index) => (
            <div>
              <Typography key={index} className={classes.poiTitle}>
                {poi.poi_name}
              </Typography>
              {capsules && (
                <div className={classes.capsuleContainer}>
                  {capsules
                    .filter((capsule, index) => {
                      return poi.poi_name === capsule.poi_name;
                    })
                    .map((capsule, index) => (
                      <Capsule key={index} capsule={capsule} />
                    ))}
                </div>
              )}
            </div>
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
