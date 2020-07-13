import React, { useContext } from 'react';

import ReactPlayer from 'react-player';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { useParams } from 'react-router-dom';
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
    marginTop: 15,
    alignItems: 'center',
  },
  avatar: {
    marginLeft: 10,
  },
  video: {
    marginTop: 10,
  },
  outchip: {
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  chip: {
    margin: 3,
  },
  duree: {
    marginRight: 20,
  },
  name: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  description: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  horizontalLine: {
    display: 'flex',
    border: '0.8px solid #FFD3C8',
    width: '100%',

    marginTop: 5,
    marginBottom: 15,
  },
}));

const CapsuleFull = () => {
  const classes = Styles();
  const { capsules } = useContext(ApiContext);
  const { id } = useParams();

  const capsFull = [...capsules];

  return (
    <>
      <div>
        {capsFull
          .filter((caps) => {
            return caps.id === Number(id);
          })
          .map((caps) => (
            <div>
              <div className={classes.head}>
                <Avatar
                  className={classes.avatar}
                  alt="Profile Picture"
                  src=""
                />
                <Typography className={classes.duree}>
                  {caps.duration_video <= 60
                    ? `${caps.duration_video} sec`
                    : `${Math.floor(caps.duration_video / 60)}m${
                        caps.duration_video % 60
                      }s`}
                </Typography>
              </div>
              <div className={classes.video}>
                <ReactPlayer
                  className={classes.video}
                  url={caps.url_video}
                  width="100"
                  height="100"
                />
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
              </div>
              <div>
                <Typography className={classes.name}>
                  {caps.capsule_name}
                </Typography>
              </div>
              <div className={classes.description}>
                <Typography>{caps.description}</Typography>
              </div>
              <span className={classes.horizontalLine} />
              <Typography>Commentaires des yoovizers</Typography>
              <Rating />
            </div>
          ))}
      </div>
    </>
  );
};

export default CapsuleFull;
