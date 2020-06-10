import React from 'react';
import './App.scss';
import Leaflet from './components/map/Map';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <div className="App">
      <Leaflet />
    </div>
  );
}

export default App;
