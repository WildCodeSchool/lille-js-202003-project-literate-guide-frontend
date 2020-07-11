import { makeStyles } from '@material-ui/core/styles';

const bottomBarStyles = makeStyles({
  root: {
    width: '100%',
    height: '10%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#F15348',
    display: 'flex',
    justifyContent: 'space-between',
  },
  element: {
    color: 'white',
  },
  selected: {
    color: 'white',
  },
  icons: {
    marginBottom: '0.3rem',
    color: 'white',
  },
});

export default bottomBarStyles;
