import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
  overrides: {
    MuiButton: {
      text: {
        color: 'white',
        backgroundColor: '#F15348',
      },
      textPrimary: {
        backgroundColor: '#F15348',
        borderRadius: '30%',
        boxShadow: 'none',
      },
    },
    MuiFab: {
      root: {
        boxShadow: 'none',
      },
    },
  },
  palette: {
    primary: {
      main: '#F15348',
      light: '#DA7B2F',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: [
      '"Montserrat"',
      'Arial',
      'sans-serif',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
export default Theme;
