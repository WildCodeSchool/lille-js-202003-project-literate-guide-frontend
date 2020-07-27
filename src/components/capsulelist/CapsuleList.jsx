import React, { useContext } from 'react';
import MapIcon from '@material-ui/icons/Map';
import Typography from '@material-ui/core/Typography';
import { Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import * as _ from 'lodash';
import Capsule from '../capsule/Capsule';
import { ApiContext } from '../../contexts/ApiContext';
import '../../App.scss';
import './CapsuleList.scss';

const ListButtonStyles = makeStyles((theme) => ({
  root: {
    zIndex: 20,
    position: 'fixed',
    bottom: theme.spacing(11),
    right: theme.spacing(2),
    width: '60px',
    height: '60px',
    boxShadow: '0px 6px 11px -1px rgba(0,0,0,0.15)',
  },
  '@global': {
    '*::-webkit-scrollbar': {
      display: 'none',
    },
  },
  poiName: {
    color: '#F15348',
    fontWeight: 'bold',
    fontSize: 18,
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
      <div className="content">
        <div className="wrap">
          {interestPoints && (
            <div className="listContainer">
              {interestPoints.map((pois) => (
                <div className="poiContainer">
                  <Typography key={pois.id} className={classes.poiName}>
                    {pois.poi_name}
                  </Typography>
                  {capsulePoints && (
                    <div className="capsuleContainer">
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
        </div>
      </div>
    </>
  );
};

export default CapsuleList;
