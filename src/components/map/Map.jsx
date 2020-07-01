import React, { useEffect, useState } from 'react';
import { Map, TileLayer, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const geolocationOptions = {
  enableHighAccuracy: false,
  timeout: 1000 * 60 * 3, // 3 min (1000 ms * 60 sec * 3 minute)
  maximumAge: 1000 * 3600 * 24, // 24 hour
};

const Leaflet = () => {
  const [position, setPosition] = useState([50.630943, 3.060299]);

  useEffect(() => {
    const watchID = navigator.geolocation.watchPosition((pos) => {
      setPosition([pos.coords.latitude, pos.coords.longitude]);
    });
    return () => {
      navigator.geolocation.clearWatch(watchID, geolocationOptions);
    };
  }, [setPosition]);

  return (
    <>
      <Map center={position} zoom={16} style={{ height: '85vh', zIndex: 0 }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
          attribution='&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <CircleMarker
          center={position}
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
