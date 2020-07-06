import React, { useState, useEffect } from 'react';
import MapIcon from '@material-ui/icons/Map';
import axios from 'axios';
import { Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import ReactPlayer from 'react-player';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '../rating/Rating';

const ListButtonStyles = makeStyles((theme) => ({
  root: {
    zIndex: 20,
    position: 'absolute',
    bottom: theme.spacing(11),
    right: theme.spacing(2),
  },
  outcard: {
    marginTop: 20,
    marginLeft: 20,
    maxWidth: 350,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
  title: {
    color: '#F15348',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 5,
    marginLeft: 10,
  },
  video: {
    marginBottom: 7,
    marginLeft: 5,
    marginRight: 5,
  },
  outchip: {
    display: 'flex',
    marginBottom: 7,
  },
  chip: {
    margin: '3px',
  },
  description: {
    fontWeight: 'bold',
    marginBottom: 10,
    width: 250,
  },
  descriDuree: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  duree: {
    color: '#F15348',
  },
}));

const CapsuleList = () => {
  const classes = ListButtonStyles();
  const [capsules, setCapsules] = useState([]);

  const getCapsules = () => {
    axios
      .get('http://localhost:4242/capsules')
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
          <Card className={classes.outcard}>
            <Typography className={classes.title}>
              {capsules[0].capsule_name}
            </Typography>
            <Rating />
            <ReactPlayer
              className={classes.video}
              url={capsules[0].url_video}
              width="290"
              height="100"
            />
            <div className={classes.descriDuree}>
              <Typography className={classes.description}>
                {capsules[0].description}
              </Typography>
              <Typography className={classes.duree}>
                {capsules[0].duration_video} sec
              </Typography>
            </div>
            <div className={classes.outchip}>
              <Chip
                className={classes.chip}
                label="Quartier"
                variant="outlined"
                color="primary"
                size="small"
              />
              <Chip
                className={classes.chip}
                label="Place"
                variant="outlined"
                color="primary"
                size="small"
              />
              <Chip
                className={classes.chip}
                label="Rue"
                variant="outlined"
                color="primary"
                size="small"
              />
              <Chip
                className={classes.chip}
                label="Monument"
                variant="outlined"
                color="primary"
                size="small"
              />
              <Chip
                className={classes.chip}
                label="Musée"
                variant="outlined"
                color="primary"
                size="small"
              />
            </div>
          </Card>
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
