import React from 'react';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const TabTagStyles = makeStyles(() => ({
  chip: {
    margin: '3px',
  },
}));

const TabTag = ({ selectTag }) => {
  const classes = TabTagStyles();

  return (
    <div>
      <Chip
        className={classes.chip}
        label={selectTag.label}
        variant="outlined"
        color="secondary"
        size="small"
      />
    </div>
  );
};

export default TabTag;

TabTag.propTypes = {
  selectTag: PropTypes.string.isRequired,
};
