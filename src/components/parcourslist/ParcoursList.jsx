import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import { backend } from '../../conf';
import Parcours from '../parcours/Parcours';
import Leaflet from '../map/Map';

const CoursesListStyles = makeStyles(() => ({
  parcours: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  parcoursMap: {
    height: '350px',
  },
  parcoursInfo: {
    display: 'flex',
    height: '80%',
    padding: '20px 20px 100px 20px',
  },
  parcoursCapsule: {
    display: 'flex',
    overflow: 'auto',
    padding: '0 17px 17px 0',
  },
}));

const ParcoursList = () => {
  const classes = CoursesListStyles();
  const [parcours, setParcours] = useState([]);

  const getParcours = () => {
    axios
      .get(`${backend}/courses`)
      .then((res) => {
        setParcours(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getParcours();
  }, []);

  const uniqueCourseByID = _.uniqBy(parcours, 'id');

  return (
    <div className={classes.parcours}>
      <div className={classes.parcoursMap}>
        <Leaflet />
      </div>
      <div className={classes.parcoursInfo}>
        {parcours && (
          <div className={classes.parcoursCapsule}>
            {uniqueCourseByID.map((course) => (
              <Parcours key={course.id} parcours={course} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ParcoursList;
