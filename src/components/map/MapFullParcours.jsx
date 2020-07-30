import React, { useContext } from 'react';
import { Map, TileLayer, CircleMarker } from 'react-leaflet';
import { LocationContext } from '../../contexts/LocationContext';
import MarkerFullParcours from '../marker/MarkerFullParcours';
import 'leaflet/dist/leaflet.css';
import '../../App.scss';

const MapFullParcours = () => {
  const value = useContext(LocationContext);

  return (
    <>
      <div className="content">
        <Map
          id="map"
          center={value}
          zoom={16}
          style={{ height: '100vh', zIndex: 0 }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
            attribution='&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <CircleMarker
            className="circle-back"
            center={value}
            radius={30}
            color="#FFFFFF"
            fillColor="#F15348"
            fillOpacity="1"
            weight="0"
          />
          <CircleMarker
            className="circle-front"
            center={value}
            radius={10}
            color="#FFFFFF"
            fillColor="#F15348"
            fillOpacity="1"
            weight="2"
          />
          <MarkerFullParcours />
        </Map>
      </div>
    </>
  );
};
export default MapFullParcours;
