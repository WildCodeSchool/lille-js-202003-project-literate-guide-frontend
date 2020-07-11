import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { backend } from '../../conf';
// import Leaflet from '../map/Map';
import './ParcoursList.scss';

const ParcoursList = () => {
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

  return (
    <div className="parcours">
      <div className="parcoursMap">{/* <Leaflet /> */}</div>
      <div className="parcoursInfo">{parcours && <div>test</div>}</div>
    </div>
  );
};

export default ParcoursList;
