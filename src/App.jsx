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
      main: '#F15348',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Montserrat"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function App() {
  return (
    <div>
      <Router>
        <MuiThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" component={Explore} />
            <Route path="/Parcours" component={Parcours} />
            <Route path="/Favoris" component={Favoris} />
            <Route path="/Profil" component={Profil} />
          </Switch>
          <BottomBar />
        </MuiThemeProvider>
      </Router>
    </div>
  );
}

export default App;
