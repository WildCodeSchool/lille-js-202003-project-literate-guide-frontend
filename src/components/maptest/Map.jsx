import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
//import Mapinfo from './MapInfo';
import Routing from './RoutingMachine';


class MapComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            lat: 50.633333,
            lng: 3.066667,
            zoom: 13,
            isMapInit: false
        };
    }

    saveMap = map => {

        this.map = map;
        this.setState({
            isMapInit: true
        });
    };

    render() {

        const { lat, lng, zoom } = this.state;
        const position = [lat, lng];

        return (
            <Map center={position} zoom={zoom} ref={this.saveMap}>

                <TileLayer
                    url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
                    attribution='&copy; 
             Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {this.state.isMapInit && <Routing map={this.map} />}
            </Map>
        );
    }
}

export default MapComponent;