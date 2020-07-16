import React, { useContext } from 'react';
import { Map, TileLayer, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LocationContext } from '../../contexts/LocationContext';
import MarkerExplore from '../marker/MarkerExplore';

const Leaflet = () => {
  const value = useContext(LocationContext);

  return (
    <>
      <Map
        id="map"
        center={value}
        zoom={16}
        style={{ height: '100%', zIndex: 0 }}
        closePopupOnClick="true"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
          attribution='&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <CircleMarker
          center={value}
          radius={10}
          color="#FFFFFF"
          fillColor="#F15348"
          fillOpacity="1"
          weight="2"
        />
        <MarkerExplore />
      </Map>
    </>
  );
};
export default Leaflet;
