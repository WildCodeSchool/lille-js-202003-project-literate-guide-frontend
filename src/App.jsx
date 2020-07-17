import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import BottomBar from './components/bottombar/BottomBar';
import Explore from './components/explore/Explore';
import Favoris from './components/favoris/Favoris';
import ParcoursList from './components/parcourslist/ParcoursList';
import Profil from './components/profil/Profil';
import NavBar from './components/navbar/Navbar';
import 'leaflet/dist/leaflet.css';
import AddParcours from './components/addparcours/AddParcours';
import AddCapsule from './components/addcapsule/AddCapsule';
import theme from './Theme';
import CapsuleList from './components/capsulelist/CapsuleList';
import { LocationProvider } from './contexts/LocationContext';
import { ApiProvider } from './contexts/ApiContext';
import CapsuleFull from './components/capsulefull/CapsuleFull';

function App() {
  return (
    <div>
      <Router>
        <MuiThemeProvider theme={theme}>
          <LocationProvider>
            <ApiProvider>
              <NavBar />
              <Switch>
                <Route exact path="/" component={Explore} />
                <Route path="/Parcours" component={ParcoursList} />
                <Route path="/Favoris" component={Favoris} />
                <Route path="/Profil" component={Profil} />
                <Route path="/capsules" component={CapsuleList} />
                <Route path="/AddCapsule" component={AddCapsule} />
                <Route path="/AddParcours" component={AddParcours} />
                <Route path="/CapsuleInfo/:id" component={CapsuleFull} />
              </Switch>
              <BottomBar />
            </ApiProvider>
          </LocationProvider>
        </MuiThemeProvider>
      </Router>
    </div>
  );
}

export default App;
