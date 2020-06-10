import React from 'react';
import './App.scss';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NavBar from './components/navbar/Navbar';

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
    </MuiThemeProvider>
  );
}

export default App;
