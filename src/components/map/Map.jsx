import React, { useState } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import useCurrentLocation from '../geolocations/useCurrentLocation';
import useWatchLocation from '../geolocations/useWatchLocation';

const geolocationOptions = {
  timeout: 1000 * 60 * 3, // 3 min (1000 ms * 60 sec * 3 minute)
};

const Leaflet = () => {
  useCurrentLocation(geolocationOptions);
  useWatchLocation(geolocationOptions);
  useState(true);
  // console.log(location);
  // const position = [50.63333, 3.057256];
  // let position = [{location.latitude}, {location.longitude}]
  return (
    <Map zoom={20} style={{ height: '85vh', zIndex: 0 }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
        attribution='&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker className="marker" />
    </Map>
  );
};

export default Leaflet;
