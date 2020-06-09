import React from 'react';
import './App.scss';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Navbar from './components/navbar/Navbar';

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
      <Navbar />
    </MuiThemeProvider>
  );
}

export default App;
