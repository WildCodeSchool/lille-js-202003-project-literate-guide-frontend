import React, { useContext } from 'react';
import { Map, TileLayer, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LocationContext } from '../../contexts/LocationContext';

const Leaflet = () => {
  const value = useContext(LocationContext);
  return (
    <>
      <Map center={value} zoom={16} style={{ height: '85vh', zIndex: 0 }}>
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
      </Map>
    </>
  );
};

export default Leaflet;
