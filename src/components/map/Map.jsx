import React, { Component } from 'react';
import { Map, Marker, TileLayer, Popup } from 'react-leaflet';
import L from 'leaflet';
import './Map.scss';



////// CODE DEPART //////////////////////////////////////////////////

/*const Leaflet = () => {

  const position = [50.63333, 3.066667];
 
  return (
    <Map center={position} zoom={22} style={{ height: '85vh', zIndex: 0 }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
        attribution='&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup></Popup>
      </Marker>
    </Map >
  );
};

export default Leaflet;
*/


///////////////////////// CLASS MARQUEUR ////////////////////////

class Leaflet extends Component {

  state = {

    blueIcon: {
      lat: 50.6374898,
      long: 3.065957,
    },


    redIcon: {
      lat: 50.6334152,
      long: 3.0208353,
    },


    greenIcon: {
      lat: 50.6330291,
      long: 3.0764463,
    },
    zoom: 22,



  }


  blueIcon = L.icon({
    iconUrl: '/images/blueIcon.png',
    iconSize: [25, 41],     //icon size
    iconAnchor: [22, 94], //point of the icon which will correspond to the marker's  
    popupAnchor: [0, -41]   // popup location 
  });


  redIcon = L.icon({
    iconUrl: '/images/redIcon.png',
    iconSize: [25, 41],
    iconAnchor: [22, 94],
    popupAnchor: [0, -41]
  });


  greenIcon = L.icon({
    iconUrl: '/images/greenIcon.png',
    iconSize: [25, 41],
    iconAnchor: [22, 94],
    popupAnchor: [0, -41]
  });


  render() {
    const positionBlueIcon = [this.state.blueIcon.lat, this.state.blueIcon.long];
    const positionRedcon = [this.state.redIcon.lat, this.state.redIcon.long];
    const positionGreenIcon = [this.state.greenIcon.lat, this.state.greenIcon.long];

    return (
      <Map className="map" center={positionBlueIcon} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
        />
        <Marker position={positionBlueIcon} icon={this.blueIcon}>
          <Popup>
            Opera de lille
          </Popup>
        </Marker>
        <Marker position={positionRedcon} icon={this.redIcon}>
          <Popup>
            Euratechnologies
          </Popup>
        </Marker>
        <Marker position={positionGreenIcon} icon={this.greenIcon}>
          <Popup>

            Le Zenith
          </Popup>
        </Marker>
      </Map >
    )
  }
}

export default Leaflet;





