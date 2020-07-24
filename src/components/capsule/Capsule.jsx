import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import * as _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import { ApiContext } from '../../contexts/ApiContext';

const CapsuleStyles = makeStyles((theme) => ({
  root: {
    zIndex: 20,
    position: 'absolute',
    bottom: theme.spacing(11),
    right: theme.spacing(2),
  },
  outcard: {
    width: '100%',
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
    position: 'relative',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '50px',
    marginBottom: 10,
  },
  name: {
    display: 'flex',
    flexWrap: 'wrap',
    fontWeight: 'bold',
    paddingRight: '10px',
  },
  box: {
    width: '200px',
    height: '50px',
    overflow: 'scroll',
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
  link: {
    textDecoration: 'none',
  },
}));

const Capsule = ({ capsule }) => {
  const { capsules } = useContext(ApiContext);
  const classes = CapsuleStyles();
  const allCaps = [...capsules];
  const filterUnique = [...allCaps].filter((fil) => {
    return fil.capsule_id === capsule.capsule_id;
  });
  const uniqueLabels = _.uniqBy(filterUnique, 'label');

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
              <Link
                className={classes.link}
                to={`/capsuleInfo/${capsule.capsule_id}`}
              >
                <Typography className={classes.name}>
                  <Box className={classes.box}>{capsule.capsule_name}</Box>
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
              {uniqueLabels.map((parc) => {
                return (
                  <Chip
                    className={classes.chip}
                    label={parc.label}
                    variant="outlined"
                    color="primary"
                    size="small"
                  />
                );
              })}
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
