import React, { useContext } from 'react';

import ReactPlayer from 'react-player';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Rating from '../rating/Rating';
import { ApiContext } from '../../contexts/ApiContext';

const Styles = makeStyles((theme) => ({
  root: {
    zIndex: 20,
    position: 'fixed',
    bottom: theme.spacing(11),
    right: theme.spacing(2),
  },
  head: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const CapsuleFull = () => {
  const classes = Styles();
  const { capsules } = useContext(ApiContext);

  const capsFull = [...capsules];

  return (
    <div>
      {capsFull
        .filter((caps) => {
          return caps.id;
        })
        .map((caps) => (
          <div>
            <div className={classes.head}>
              <Avatar alt="Profile Picture" src="" />
              <Typography className={classes.duree}>
                {caps.duration_video <= 60
                  ? `${caps.duration_video} sec`
                  : `${Math.floor(caps.duration_video / 60)}m${
                      caps.duration_video % 60
                    }s`}
              </Typography>
            </div>
            <ReactPlayer
              className={classes.video}
              url={caps.url_video}
              width="100"
              height="100"
            />
            <div>
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
            </div>
            <div>
              <Typography>{caps.capsule_name}</Typography>
            </div>
            <div>
              <Typography>{caps.description}</Typography>
            </div>
            <Typography>Commentaires des yoovizers</Typography>
            <Rating />
          </div>
        ))}
    </div>
  );
};

export default CapsuleFull;
