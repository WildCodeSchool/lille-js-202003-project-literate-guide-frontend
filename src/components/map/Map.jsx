import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

const Leaflet = () => {
  const position = [50.63333, 3.066667];

  return (
    <Map center={position} zoom={22} style={{ height: '80vh', zIndex: 0 }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
        attribution='&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  );
};

export default Leaflet;
