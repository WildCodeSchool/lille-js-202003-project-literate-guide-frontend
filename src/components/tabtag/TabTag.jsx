import React from 'react';
import Chip from '@material-ui/core/Chip';
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
          <Chip
            className={classes.chip}
            label="Quartier"
            variant="outlined"
            color="secondary"
            size="small"
          />
          <Chip
            className={classes.chip}
            label="Place"
            variant="outlined"
            color="secondary"
            size="small"
          />
          <Chip
            className={classes.chip}
            label="Rue"
            variant="outlined"
            color="secondary"
            size="small"
          />
          <Chip
            className={classes.chip}
            label="Monument"
            variant="outlined"
            color="secondary"
            size="small"
          />
          <Chip
            className={classes.chip}
            label="Musée"
            variant="outlined"
            color="secondary"
            size="small"
          />
          <Chip
            className={classes.chip}
            label="Parc"
            variant="outlined"
            color="secondary"
            size="small"
          />
          <Chip
            className={classes.chip}
            label="Street Art"
            variant="outlined"
            color="secondary"
            size="small"
          />
          <Chip
            className={classes.chip}
            label="Curiosité"
            variant="outlined"
            color="secondary"
            size="small"
          />
        </div>
        <hr className={classes.hr} />
        <div>
          <h2 className={classes.subTitle}>Styles</h2>
        </div>
        <div>
          <Chip
            className={classes.chip}
            label="Enfants"
            variant="outlined"
            color="secondary"
            size="small"
          />
          <Chip
            className={classes.chip}
            label="Humour"
            variant="outlined"
            color="secondary"
            size="small"
          />
          <Chip
            className={classes.chip}
            label="Quizz"
            variant="outlined"
            color="secondary"
            size="small"
          />
          <Chip
            className={classes.chip}
            label="Teaser"
            variant="outlined"
            color="secondary"
            size="small"
          />
          <Chip
            className={classes.chip}
            label="Name"
            variant="outlined"
            color="secondary"
            size="small"
          />
        </div>
      </div>
    </>
  );
}
