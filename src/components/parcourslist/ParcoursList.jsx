import React, { useContext } from 'react';
import * as _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Parcours from '../parcours/Parcours';
import Leaflet from '../map/Map';
import { ApiContext } from '../../contexts/ApiContext';

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
  const { course } = useContext(ApiContext);
  const parcours = [...course];

  const uniqueCourseByID = _.uniqBy(parcours, 'course_id');
  console.log(uniqueCourseByID);
  console.log(parcours);

  // const labels = [];
  // const toto = (id) => {
  //   if (parcours) {
  //     const tata = [...parcours].filter((parc) => {
  //       return id === parc.cou.id;
  //       });
  //     return labels = _.uniqBy(tata, 'label');
  //   }
  // }

  return (
    <div className={classes.parcours}>
      <div className={classes.parcoursMap}>
        <Leaflet />
      </div>
      <div className={classes.parcoursInfo}>
        {parcours && (
          <div className={classes.parcoursCapsule}>
            {uniqueCourseByID.map((parc, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Parcours key={index} parcours={parc} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ParcoursList;
