import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import BottomBar from './components/bottombar/BottomBar';
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
    <MuiThemeProvider theme={theme}>
      <BottomBar />
    </MuiThemeProvider>
  );
}

export default App;
