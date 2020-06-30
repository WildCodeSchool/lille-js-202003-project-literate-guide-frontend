
import React, { Component } from "react";
import { Map, TileLayer, CircleMarker } from "react-leaflet";
import axios from "axios";
import "./Map.scss";
import { Marker } from "leaflet";

class Maptest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: [50.633333, 3.066667],
            zoom: 22,
            address: "",
            //lon: "",
            //lat: "",
            autocomplete: [],
        };
    };


    // recherche par adresse 

    handleChange = (e) => {
        this.setState({ address: e.target.value });
        axios
            .get("https://api-adresse.data.gouv.fr/search/?q=" + e.target.value)
            .then((res) => {
                this.setState({ autocomplete: res.data.features });
            });
    };

    /* recherche par coordonnées GPS


    handleGps = (e) => {
        this.setState = ({ lon: e.target.value});
        this.setState = ({ lat: e.target.value});
        
        console.log()
        axios
            .get(`https://api-adresse.data.gouv.fr/reverse/?lon=${this.state.lon}&lat=${this.state.lat}`)
            .then((res) => {
                this.setState({})
                console.log(res)
            })
    }*/


    // auto_complétion
    completeInput = (value) => {
        this.setState({ address: value, autocomplete: [] });
        axios
            .get("https://api-adresse.data.gouv.fr/search/?q=" + value)
            .then((res) => {
                const longitude = res.data.features[0].geometry.coordinates[1];
                const latitude = res.data.features[0].geometry.coordinates[0];
                this.setState({ center: [longitude, latitude] });
            });
    };



    // affichage adresse sous champ de recherche 
    autoComplete = () => {
        const addresses = this.state.autocomplete;
        return (
            <div>
                {addresses.map((address, i) => {
                    return (
                        <p key={i}>
                            <button
                                onClick={() => this.completeInput(address.properties.label)}
                            >
                                {address.properties.label}
                            </button>
                        </p>
                    );
                })}
            </div>
        );
    };

    render() {
        console.log(this.state.center);
        return (
            <div>
                <Map className="map"
                    center={this.state.center}
                    zoom={this.state.zoom}
                    scrollWheelZoom={false}
                    dragging={false}
                >
                    <TileLayer
                        attribution='&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
                    />

                    {/*<Marker>
                        center={this.state.center}
                    </Marker>*/}

                    <CircleMarker
                        center={this.state.center}
                        radius={35} // Rayon
                        color={"#593cfb"} // Couleur bordure
                        fillColor={"#593cfb"} // Couleur remplissage
                        fillOpacity={"0.5"} // Opacité
                        weight={"0"} // Epaisseur dbordure
                    ></CircleMarker>
                </Map>

                <form onSubmit={this.handleSubmit}>
                    <input
                        style={{ width: "300px" }}
                        type="text"
                        name="address"
                        onChange={this.handleChange}
                        autoComplete="off"
                        value={this.state.address}
                        placeholder="Recherche une adresse"
                        autoCorrect="off"
                    />

                </form>
                <div>{this.autoComplete()}</div>
            </div>
        );
    }
}
export default Maptest;