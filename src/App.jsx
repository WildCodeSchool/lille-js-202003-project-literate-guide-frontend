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
import theme from './Theme';

function App() {
  return (
    <div>
      <Router>
        <MuiThemeProvider theme={theme}>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Explore} />
            <Route path="/Parcours" component={Parcours} />
            <Route path="/Favoris" component={Favoris} />
            <Route path="/Profil" component={Profil} />
            <Route path="/capsule" component={Capsule} />
          </Switch>
          <BottomBar />
        </MuiThemeProvider>
      </Router>
    </div>
  );
}

export default App;
