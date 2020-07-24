import React, { useContext } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { LocationContext } from '../../contexts/LocationContext';
import MarkerParcours from '../marker/MarkerParcours';
import 'leaflet/dist/leaflet.css';

const MapParcours = () => {
  const value = useContext(LocationContext);

  return (
    <>
      <Map
        id="map"
        center={value}
        zoom={14}
        style={{ height: '100%', zIndex: 0 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
          attribution='&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MarkerParcours />
      </Map>
    </>
  );
};
export default MapParcours;
