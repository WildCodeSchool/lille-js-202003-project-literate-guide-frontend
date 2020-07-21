import React from 'react';
import * as _ from 'lodash';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const Styles = makeStyles(() => ({
  chip: {
    margin: 3,
  },
}));

const CourseDisplayTag = (courseId, parcours) => {
  const classes = Styles();

  const uniqueLabels = _.uniqBy([...parcours], 'label');
  return (
    <>
      {uniqueLabels
        .filter((parc) => {
          return courseId === parc.course_id;
        })
        .map((parc) => {
          return (
            <Chip
              className={classes.chip}
              label={parc.label}
              variant="outlined"
              color="primary"
              size="small"
            />
          );
        })}
    </>
  );
};
export default CourseDisplayTag;
