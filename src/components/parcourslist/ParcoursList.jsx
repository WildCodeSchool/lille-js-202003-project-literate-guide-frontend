import React, { useContext, useState } from 'react';
import * as _ from 'lodash';
import Parcours from '../parcours/Parcours';
import { ApiContext } from '../../contexts/ApiContext';
import '../../App.scss';
import './ParcoursList.scss';
import MapParcours from '../map/MapParcours';
import CurrentCourseContext from '../../contexts/CurrentCourseContext';

const ParcoursList = () => {
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
    <div className="content">
      <div className="parcours">
        <div className="mapContainer ">
          <Leaflet />
        </div>
        <div className="parcoursWrap">
          <div className="parcoursInfo">
            {parcours && (
              <div className="parcoursCapsule">
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
    </CurrentCourseContext.Provider>
  );
};

export default ParcoursList;
