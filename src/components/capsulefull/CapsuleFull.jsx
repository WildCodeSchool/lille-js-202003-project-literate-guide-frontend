import React, { useContext } from 'react';

import ReactPlayer from 'react-player';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import * as _ from 'lodash';
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
    marginLeft: 15,
  },
  video: {
    marginTop: 10,
  },
  outchip: {
    margin: '10px 0px 10px 20px',
  },
  chip: {
    margin: 3,
  },
  duree: {
    marginRight: 20,
  },
  name: {
    fontWeight: 'bold',
    marginLeft: 20,
  },
  description: {
    margin: '0px 20px 10px 20px',
  },
  horizontalLine: {
    display: 'flex',
    border: '0.8px solid #FFD3C8',
    width: '100%',

    marginTop: 5,
    marginBottom: 15,
  },
  comment: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  pen: {
    height: 35,
    marginRight: 20,
  },
  title: {
    fontWeight: 'bold',
  },
}));

const CapsuleFull = () => {
  const classes = Styles();
  const { capsules } = useContext(ApiContext);
  const { id } = useParams();

  const uniqueCapsuleById = _.uniqBy([...capsules], 'capsule_id');

  return (
    <>
      <div>
        {uniqueCapsuleById
          .filter((caps) => {
            return caps.capsule_id === Number(id);
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
              <div className={classes.comment}>
                <div>
                  <Typography className={classes.title}>
                    Commentaires des yoovizers
                  </Typography>
                  <Rating />
                </div>
                <img
                  src="/images/pen_black.png"
                  alt="create comment"
                  className={classes.pen}
                />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CapsuleFull;
