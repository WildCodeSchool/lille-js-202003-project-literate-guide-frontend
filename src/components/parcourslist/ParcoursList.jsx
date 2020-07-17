import React, { useContext } from 'react';
import * as _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Parcours from '../parcours/Parcours';
import { ApiContext } from '../../contexts/ApiContext';
import '../../App.scss';
import './ParcoursList.scss';

const CoursesListStyles = makeStyles(() => ({
  parcoursMap: {
    height: '30%',
    gridRow: '1/2',
  },
  parcoursInfo: {
    display: 'flex',
    height: 'auto',
    padding: '20px 20px 100px 20px',
    zIndex: '5',
    gridRow: '2/3',
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

  const uniqueCourseByID = _.uniqBy(parcours, 'course_id');

  return (
    <div className="content">
      <div className="parcours">
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
    </div>
  );
};

export default ParcoursList;
