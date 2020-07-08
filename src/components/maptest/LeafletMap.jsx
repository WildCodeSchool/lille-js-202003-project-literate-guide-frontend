import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import RoutingMachine from './RoutingMachine';
import './Map.scss';
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";



class LeafletMap extends Component {

    state = {
        lat: 50.633333,
        lng: 3.066667,
        zoom: 13,
        isMapInit: false
    };

    saveMap = map => {
        this.map = map;
        this.setState({
            isMapInit: true
        });
    };

    render() {

        const start = [this.state.lat, this.state.lng];


        return (

            <Map className="map" center={start} zoom={this.state.zoom} ref={this.saveMap}>
                <TileLayer
                    attribution='&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
                />
                {this.state.isMapInit && <RoutingMachine map={this.map} />}
            </Map>
        );
    }
}

export default LeafletMap;