import React, { useContext } from 'react';
import * as _ from 'lodash';
import Parcours from '../parcours/Parcours';
import Leaflet from '../map/Map';
import { ApiContext } from '../../contexts/ApiContext';
import '../../App.scss';
import './ParcoursList.scss';

const ParcoursList = () => {
  const { course } = useContext(ApiContext);
  const parcours = [...course];

  const uniqueCourseByID = _.uniqBy(parcours, 'course_id');

  return (
    <div className="content">
      <div className="parcours">
        <div className="mapContainer ">
          <Leaflet />
        </div>
        <div className="ParcoursWrap">
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
    </div>
  );
};

export default ParcoursList;
