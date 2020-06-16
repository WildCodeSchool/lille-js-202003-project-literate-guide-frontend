import { makeStyles } from '@material-ui/core/styles';

const fabButtonStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
  },
  container: {
    position: 'absolute',
    top: -85,
  },
  fabButton: {
    position: 'absolute',
    top: -30,
  },
  addCapsule: {
    marginRight: '0.7rem',
    backgroundColor: 'black',
  },
  addParcours: {
    backgroundColor: 'black',
  },
});

export default fabButtonStyles;
