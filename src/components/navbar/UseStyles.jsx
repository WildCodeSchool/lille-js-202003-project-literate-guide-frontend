import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  navBar: {
    background: 'linear-gradient(45deg, #F15348 30%, #DA7B2F 90%)',
    height: '4.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  menuTool: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  img: {
    width: '9rem',
  },
}));
export default useStyles;
