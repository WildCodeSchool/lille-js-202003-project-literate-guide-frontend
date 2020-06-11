import { makeStyles } from '@material-ui/core/styles';

const bottomBarStyles = makeStyles({
  root: {
    width: '100%',
    height: '4.5rem',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#F15348',
    display: 'flex',
    justifyContent: 'space-between',
  },
  element: {
    color: 'white',
    fontFamily: '"Montserrat"',
  },
  selected: {
    color: 'white',
  },
  icons: {
    marginBottom: '0.4rem',
    color: 'white',
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
});

export default bottomBarStyles;