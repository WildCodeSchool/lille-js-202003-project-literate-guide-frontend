import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Leaflet from './components/map/Map';
import NavBar from './components/navbar/Navbar';
import './App.scss';
import 'leaflet/dist/leaflet.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F15348',
      light: '#DA7B2F',
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <NavBar />
      <Leaflet />
    </MuiThemeProvider>
  );
}

export default App;
