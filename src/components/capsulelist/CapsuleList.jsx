import React, { useState, useEffect } from 'react';
import MapIcon from '@material-ui/icons/Map';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Capsule from '../capsule/Capsule';
import { backend } from '../../conf';

const ListButtonStyles = makeStyles((theme) => ({
  root: {
    zIndex: 20,
    position: 'fixed',
    bottom: theme.spacing(11),
    right: theme.spacing(2),
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 70,
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20,
  },
  poiName: {
    color: '#F15348',
    fontWeight: 'bold',
    fontSize: 18,
  },
  capsuleContainer: {
    display: 'flex',
    overflow: 'scroll',
  },
  horizontalLine: {
    display: 'flex',
    border: '0.8px solid #FFD3C8',
    width: '100%',
    marginTop: 5,
    marginBottom: 15,
  },
}));

const CapsuleList = () => {
  const classes = ListButtonStyles();
  const [capsules, setCapsules] = useState([]);
  const [interestPoints, setInterestPoints] = useState([]);

  const getCapsules = () => {
    axios
      .get(`${backend}/capsules`)
      .then((res) => {
        setCapsules(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getInterestPoints = () => {
    axios
      .get('http://localhost:8000/poi')
      .then((res) => {
        setInterestPoints(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCapsules();
    getInterestPoints();
  }, []);

  return (
    <>
      {interestPoints && (
        <div className={classes.listContainer}>
          {interestPoints.map((poi) => (
            <div className={classes.poiContainer}>
              <Typography key={poi.id} className={classes.poiName}>
                {poi.poi_name}
              </Typography>
              {capsules && (
                <div className={classes.capsuleContainer}>
                  {capsules
                    .filter((capsule) => {
                      return poi.poi_name === capsule.poi_name;
                    })
                    .map((capsule) => (
                      <Capsule key={capsule.id} capsule={capsule} />
                    ))}
                </div>
              )}
              <span className={classes.horizontalLine} />
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
