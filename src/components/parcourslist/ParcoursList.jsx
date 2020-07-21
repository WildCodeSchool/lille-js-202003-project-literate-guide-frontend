import React, { useContext, useState } from 'react';
import * as _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Parcours from '../parcours/Parcours';
import { ApiContext } from '../../contexts/ApiContext';
import MapParcours from '../map/MapParcours';
import CurrentCourseContext from '../../contexts/CurrentCourseContext';

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
  '@global': {
    '*::-webkit-scrollbar': {
      display: 'none',
    },
  },
}));

const ParcoursList = () => {
  const classes = CoursesListStyles();
  const { course } = useContext(ApiContext);
  const parcours = [...course];
  const [currentCourse, setCurrentCourse] = useState(1);

  const uniqueCourseByID = _.uniqBy(parcours, 'course_id');

  const contextValue = {
    currentCourse,
    updateMap: setCurrentCourse,
  };

  return (
    <CurrentCourseContext.Provider value={contextValue}>
      <div className={classes.parcours}>
        <div className={classes.parcoursMap}>
          <MapParcours />
        </div>
        <div className={classes.parcoursInfo}>
          {parcours && (
            <div className={classes.parcoursCapsule}>
              {uniqueCourseByID.map((parc) => (
                <Parcours
                  key={parc.id}
                  parcours={parc}
                  fullparcours={parcours}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </CurrentCourseContext.Provider>
  );
};

export default ParcoursList;
