import React, { useContext, useState } from 'react';
import MapIcon from '@material-ui/icons/Map';
import Typography from '@material-ui/core/Typography';
import { Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Capsule from '../capsule/Capsule';
import { ApiContext } from '../../contexts/ApiContext';
import { LocationContext } from '../../contexts/LocationContext';

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
  const { poi, capsules } = useContext(ApiContext);
  const value = useContext(LocationContext);
  const [near, getNear] = useState([]);

  const interestPoints = [...poi];
  const capsulePoints = [...capsules];
  console.log(interestPoints.latitude);

  // function distance() {
  //   const radlat1 = (Math.PI * latGeoloc) / 180;
  //   const radlat2 = (Math.PI * latPoi) / 180;
  //   const theta = lngGeoloc - lngPoi;
  //   const radtheta = (Math.PI * theta) / 180;
  //   let dist =
  //     Math.sin(radlat1) * Math.sin(radlat2) +
  //     Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  //   if (latGeoloc === latPoi && lngGeoloc === lngPoi) {
  //     return 0;
  //   }
  //   if (dist > 1) {
  //     dist = 1;
  //   } else {
  //     dist = Math.acos(dist);
  //     dist = (dist * 180) / Math.PI;
  //     dist = dist * 60 * 1.1515;
  //     dist = dist * 1.609344;
  //     //kilomètre
  //   }
  //   return dist;
  // }

  // const distance = (interestPoints) => {
  //   const latGeoloc = [...value][0];
  //   const lngGeoloc = [...value][1];

  //   const result = Math.sqrt(
  //     (interestPoints.latitude[0] - latGeoloc) *
  //       111 *
  //       ((interestPoints.latitude[0] - latGeoloc) * 111) +
  //       (interestPoints.longitude[1] - lngGeoloc) *
  //         70 *
  //         ((interestPoints.longitude[1] - lngGeoloc) * 70)
  //   );
  //   interestPoints.distance = result.toFixed(3);
  //   return interestPoints;
  // };

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
