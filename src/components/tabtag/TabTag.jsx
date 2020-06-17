import React from 'react';
import TabTagStyles from './TabTagStyles';

export default function TabBar() {
  const classes = TabTagStyles();

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
