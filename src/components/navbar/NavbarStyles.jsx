import { makeStyles } from '@material-ui/core/styles';

const NavBarStyles = makeStyles(() => ({
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
  tags: {
    background: 'linear-gradient(45deg, #F15348 30%, #DA7B2F 90%)',
    color: 'white',
    height: '100%',
    width: '250px',
    textAlign: 'center',
    paddingTop: '30px',
    borderBottom: '0.1rem solid',
    borderColor: 'white',
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '1.3rem',
    paddingBottom: '20px',
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: '1.3rem',
    paddingBottom: '30px',
    paddingTop: '20px',
  },
  hr: {
    width: '70%',
    border: '0.1rem solid',
  },
  butt: {
    borderRadius: '60px',
    borderColor: 'white',
    border: '0.1rem solid',
    fontSize: '0.7rem',
  },
  subTag: {},
}));
export default NavBarStyles;
