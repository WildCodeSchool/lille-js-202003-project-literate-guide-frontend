import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';

const CapsuleStyles = makeStyles((theme) => ({
  root: {
    zIndex: 20,
    position: 'absolute',
    bottom: theme.spacing(11),
    right: theme.spacing(2),
  },
  container: {
    marginTop: 10,
    marginLeft: 10,
  },
  outcard: {
    maxWidth: 300,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 10,
  },
  poiTitle: {
    color: '#F15348',
    fontWeight: 'bold',
    fontSize: 20,
  },
  video: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  outchip: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 7,
    marginLeft: 5,
    marginRight: 5,
  },
  chip: {
    margin: '3px',
  },
  description: {
    marginBottom: 10,
    width: 250,
    fontSize: 13,
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },
  duree: {
    color: '#F15348',
  },
  hr: {
    width: '90%',
    marginTop: 20,
  },
}));

const Capsule = ({ capsule }) => {
  const classes = CapsuleStyles();

  return (
    <>
      <div className={classes.container}>
        <Typography className={classes.poiTitle}>{capsule.poi_name}</Typography>
        <Card className={classes.outcard}>
          <ReactPlayer
            className={classes.video}
            url={capsule.url_video}
            width="290"
            height="100"
          />
          <div className={classes.content}>
            <Typography>{capsule.capsule_name}</Typography>
            <Typography className={classes.duree}>
              {capsule.duration_video}
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
      </div>
      <hr className={classes.hr} />
    </>
  );
};

export default Capsule;
