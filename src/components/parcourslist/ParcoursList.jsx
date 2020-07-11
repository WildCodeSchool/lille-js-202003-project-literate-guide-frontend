import React from 'react';
// import Leaflet from '../map/Map';
import './ParcoursList.scss';

function ParcoursList() {
  return (
    <div className="parcours">
      <div className="parcoursMap">{/* <Leaflet /> */}</div>
      <div className="parcoursInfo">
        <p>test</p>
      </div>
    </div>
  );
}

export default ParcoursList;
