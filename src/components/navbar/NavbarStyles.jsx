import { makeStyles } from '@material-ui/core/styles';

const NavBarStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  navBar: {
    width: '100vw',
    background: 'linear-gradient(45deg, #F15348 30%, #DA7B2F 90%)',
    position: 'fixed',
    height: '4.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    Zindex: '300',
  },
  menuTool: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  img: {
    width: '9rem',
  },
  logo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  alpha: {
    paddingLeft: 20,
    fontStyle: 'italic',
    fontSize: 14,
  },
}));
export default NavBarStyles;
