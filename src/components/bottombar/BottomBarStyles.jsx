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
    Zindex: '300',
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
