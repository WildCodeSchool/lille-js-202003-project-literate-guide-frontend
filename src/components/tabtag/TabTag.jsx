import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

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
    fontSize: '1.3rem',
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: '1.3rem',
    paddingBottom: '30px',
    paddingTop: '20px',
  },
  hr: {
    width: '70%',
    marginTop: '30px',
  },
  butt: {
    borderRadius: '60px',
    borderColor: 'white',
    border: '1px solid',
    fontSize: '0.9rem',
    margin: '2px',
    textTransform: 'lowercase',
  },
});

export default function TabBar() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.tags}>
        <div>
          <h2 className={classes.title}>Choisissez vos centres intérêts</h2>
        </div>
        <hr className={classes.hr} />
        <div>
          <h2 className={classes.subTitle}>Types</h2>
        </div>
        <div>
          <ul className={classes.subTag}>
            <li>
              <Button className={classes.butt}>Quartier</Button>
              <Button className={classes.butt}>Place</Button>
              <Button className={classes.butt}>Rue</Button>
              <Button className={classes.butt}>Monument</Button>
              <Button className={classes.butt}>Musée</Button>
              <Button className={classes.butt}>Parc</Button>
              <Button className={classes.butt}>Street Art</Button>
              <Button className={classes.butt}>Curiosité</Button>
            </li>
          </ul>
        </div>
        <hr className={classes.hr} />
        <div>
          <h2 className={classes.subTitle}>Styles</h2>
        </div>
        <div>
          <ul>
            <li className={classes.subTag}>
              <Button className={classes.butt}>Enfants</Button>
              <Button className={classes.butt}>Humous</Button>
              <Button className={classes.butt}>Quizz</Button>
              <Button className={classes.butt}>Teaser</Button>
              <Button className={classes.butt}>Name</Button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
