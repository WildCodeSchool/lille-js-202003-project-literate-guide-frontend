import React, { useContext } from 'react';
import { Map, TileLayer, CircleMarker, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LocationContext } from '../../contexts/LocationContext';
import { ApiContext } from '../../contexts/ApiContext';

const IconStyle = new Icon({
  iconUrl: '/images/pin.png',
  iconSize: [34, 34],
});

const Leaflet = () => {
  const value = useContext(LocationContext);
  const { poi } = useContext(ApiContext);

  const allPoi = [...poi];
  return (
    <>
      <Map
        id="map"
        center={value}
        zoom={16}
        style={{ height: '100%', zIndex: 0 }}
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
          icon={IconStyle}
        />
        {allPoi[0] &&
          allPoi.map((pois) => {
            return (
              <Marker
                key={pois.poi_name}
                position={[pois.latitude, pois.longitude]}
                icon={IconStyle}
              />
            );
          })}
      </Map>
    </>
  );
};
export default Leaflet;
