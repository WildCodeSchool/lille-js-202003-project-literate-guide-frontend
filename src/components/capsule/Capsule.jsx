import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

const CapsuleStyles = makeStyles((theme) => ({
  root: {
    zIndex: 20,
    position: 'absolute',
    bottom: theme.spacing(11),
    right: theme.spacing(2),
  },
  outcard: {
    width: 300,
    borderRadius: 10,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  video: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  contentContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 6,
    paddingBottom: 5,
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '40px',
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
    overflow: 'hidden',
    paddingRight: '10px',
  },
  duree: {
    display: 'flex',
    justifyContent: 'flex-end',
    color: '#F15348',
    fontSize: 13,
  },
  outchip: {
    display: 'flex',
    overflow: 'scroll',
  },
  chip: {
    marginBottom: 5,
    marginRight: 4,
  },
}));

const Capsule = ({ capsule }) => {
  const classes = CapsuleStyles();

  return (
    <>
      <div className={classes.pageContainer}>
        <Card className={classes.outcard}>
          <ReactPlayer
            className={classes.video}
            url={capsule.url_video}
            width="100"
            height="100"
          />
          <div className={classes.contentContainer}>
            <div className={classes.content}>
              <Link to={`/capsuleInfo/${capsule.capsule_id}`}>
                <Typography className={classes.name}>
                  <Box lineHeight={1.2}>{capsule.capsule_name}</Box>
                </Typography>
              </Link>
              <Typography className={classes.duree}>
                {capsule.duration_video <= 60
                  ? `${capsule.duration_video} sec`
                  : `${Math.floor(capsule.duration_video / 60)}m${
                      capsule.duration_video % 60
                    }s`}
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
          </div>
        </Card>
      </div>
    </>
  );
};

export default Capsule;

Capsule.propTypes = {
  capsule: PropTypes.string.isRequired,
};
