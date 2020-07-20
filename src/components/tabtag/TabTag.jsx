import React from 'react';
import Chip from '@material-ui/core/Chip';
import * as _ from 'lodash';
import Typography from '@material-ui/core/Typography';
import TabTagStyles from './TabTagStyles';

const TabTag = (selectTag, category) => {
  const classes = TabTagStyles();

  const uniqueCategory = _.uniqBy(category, 'category');

  return (
    <>
      <div className={classes.tags}>
        <div>
          <Typography className={classes.title}>
            Choisissez vos centres d&apos;intérêts
          </Typography>
        </div>
        <hr className={classes.hr} />
        {uniqueCategory.map((cat) => {
          console.log(cat.category);
          return (
            <div>
              <Typography className={classes.subTitle}>
                {cat.category}
              </Typography>
            </div>
          );
        })}
        <div>
          <Typography className={classes.subTitle}>
            {selectTag.category}
          </Typography>
        </div>

        <div>
          <Chip
            className={classes.chip}
            label={selectTag.label}
            variant="outlined"
            color="secondary"
            size="small"
          />
        </div>
        <hr className={classes.hr} />
      </div>
    </>
  );
};

export default TabTag;
