import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Map, TileLayer, CircleMarker, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LocationContext } from '../../contexts/LocationContext';

const Leaflet = () => {
  const value = useContext(LocationContext);
  const [poi, setPoi] = useState();

  const getPoi = () => {
    axios
      .get('http://localhost:4242/poi')
      .then((res) => {
        setPoi(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPoi();
  }, []);

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
        {poi.map((pois) => {
          return (
            <Marker
              key={pois.poi_name}
              position={[pois.latitude[0], pois.longitude[1]]}
            />
          );
        })}
      </Map>
    </>
  );
};
export default Leaflet;
