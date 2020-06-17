import { makeStyles } from '@material-ui/core/styles';

const TabTagStyles = makeStyles({
  tags: {
    background: 'linear-gradient(45deg, #F15348 30%, #DA7B2F 90%)',
    color: 'white',
    height: '100vh',
    width: '270px',
    textAlign: 'center',
    paddingTop: '30px',
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '1.3rem',
  },
  subTitle: {
    fontWeight: 'bold',
    paddingBottom: '15px',
    paddingTop: '15px',
    textAlign: 'center',
  },
  subTag: {
    listStyleType: 'none',
    display: 'flex',
    flexRow: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  hr: {
    width: '70%',
    marginTop: '20px',
    color: 'white',
  },
  butt: {
    borderRadius: '15px',
    padding: '6px',
    width: '80px',
    fontSize: '10px',
    borderColor: 'white',
    border: '1px solid',
    margin: '3px',
    '&:hover': {
      cursor: 'pointer',
      color: '#000000',
      backgroundColor: '#ffffff',
    },
  },
});
export default TabTagStyles;
