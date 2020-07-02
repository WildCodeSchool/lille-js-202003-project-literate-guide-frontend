import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import BottomBar from './components/bottombar/BottomBar';
import Capsule from './components/capsule/Capsule';
import Explore from './components/explore/Explore';
import Favoris from './components/favoris/Favoris';
import Parcours from './components/parcours/Parcours';
import Profil from './components/profil/Profil';
import NavBar from './components/navbar/Navbar';
import 'leaflet/dist/leaflet.css';
import AddParcours from './components/addparcours/AddParcours';
import AddCapsule from './components/addcapsule/AddCapsule';
import theme from './Theme';
import { LocationProvider } from './contexts/LocationContext';

function App() {
  return (
    <div>
      <Router>
        <MuiThemeProvider theme={theme}>
          <LocationProvider>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Explore} />
              <Route path="/Parcours" component={Parcours} />
              <Route path="/Favoris" component={Favoris} />
              <Route path="/Profil" component={Profil} />
              <Route path="/capsules" component={Capsule} />
              <Route path="/AddCapsule" component={AddCapsule} />
              <Route path="/AddParcours" component={AddParcours} />
            </Switch>
            <BottomBar />
          </LocationProvider>
        </MuiThemeProvider>
      </Router>
    </div>
  );
}

export default App;
