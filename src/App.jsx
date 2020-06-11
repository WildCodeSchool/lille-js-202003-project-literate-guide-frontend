import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BottomBar from './components/bottombar/BottomBar';
import Explore from './components/explore/Explore';
import Favoris from './components/favoris/Favoris';
import Parcours from './components/parcours/Parcours';
import Profil from './components/profil/Profil';
import './App.scss';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#F15348',
    },
  },
});

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Explore} />
          <Route path="/Parcours" component={Parcours} />
          <Route path="/Favoris" component={Favoris} />
          <Route path="/Profil" component={Profil} />
        </Switch>
        <MuiThemeProvider theme={theme}>
          <BottomBar />
        </MuiThemeProvider>
      </Router>
    </div>
  );
}

export default App;
