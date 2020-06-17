import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
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
    '&:active': {
      cursor: 'pointer',
      color: '#000000',
      backgroundColor: '#ffffff',
    },
  },
});

export default function TabBar() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.tags}>
        <div>
          <h2 className={classes.title}>
            Choisissez vos centres d&apos;intérêts
          </h2>
        </div>
        <hr className={classes.hr} />
        <div>
          <h2 className={classes.subTitle}>Types</h2>
        </div>
        <div>
          <ul className={classes.subTag}>
            <li className={classes.butt}>Quartier</li>
            <li className={classes.butt}>Place</li>
            <li className={classes.butt}>Rue</li>
            <li className={classes.butt}>Monument</li>
            <li className={classes.butt}>Musée</li>
            <li className={classes.butt}>Parc</li>
            <li className={classes.butt}>Street Art</li>
            <li className={classes.butt}>Curiosité</li>
          </ul>
        </div>
        <hr className={classes.hr} />
        <div>
          <h2 className={classes.subTitle}>Styles</h2>
        </div>
        <div>
          <ul className={classes.subTag}>
            <li className={classes.butt}>Enfants</li>
            <li className={classes.butt}>Humour</li>
            <li className={classes.butt}>Quizz</li>
            <li className={classes.butt}>Teaser</li>
            <li className={classes.butt}>Name</li>
          </ul>
        </div>
      </div>
    </>
  );
}
