import React, { useContext } from 'react';
import MapIcon from '@material-ui/icons/Map';
import Typography from '@material-ui/core/Typography';
import { Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import * as _ from 'lodash';
import Capsule from '../capsule/Capsule';
import { ApiContext } from '../../contexts/ApiContext';

const ListButtonStyles = makeStyles((theme) => ({
  root: {
    zIndex: 20,
    position: 'fixed',
    bottom: theme.spacing(11),
    right: theme.spacing(2),
  },
  '@global': {
    '*::-webkit-scrollbar': {
      display: 'none',
    },
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
    overflowX: 'auto',
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
  const { poi, capsules } = useContext(ApiContext);

  const interestPoints = [...poi];

  const capsulePoints = _.uniqBy([...capsules], 'capsule_id');

  return (
    <>
      {interestPoints && (
        <div className={classes.listContainer}>
          {interestPoints.map((pois) => (
            <div className={classes.poiContainer}>
              <Typography key={pois.id} className={classes.poiName}>
                {pois.poi_name}
              </Typography>
              {capsulePoints && (
                <div className={classes.capsuleContainer}>
                  {capsulePoints
                    .filter((capsule) => {
                      return pois.poi_name === capsule.poi_name;
                    })
                    .map((capsule) => (
                      <Capsule key={capsule.capsule_id} capsule={capsule} />
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
