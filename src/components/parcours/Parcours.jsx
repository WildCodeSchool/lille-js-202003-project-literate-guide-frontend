import React, { useContext } from 'react';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import * as _ from 'lodash';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import CurrentCourseContext from '../../contexts/CurrentCourseContext';

const ParcoursStyles = makeStyles(() => ({
  outcard: {
    width: '300px',
    borderRadius: '10px',
    marginRight: '20px',
    backgroundColor: '#E6FBFC',
  },
  video: {
    borderRadius: '10px',
  },
  contentContainer: {
    padding: '10px',
  },
  parcoursHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '10px 0',
  },
  name: {
    fontWeight: 'bold',
  },
  price: {
    backgroundColor: '#f15348',
    fontWeight: 'bold',
    color: '#FFFFFF',
    border: 'none',
  },
  description: {
    fontSize: 13,
    height: '60px',
    marginBottom: '10px',
    overflow: 'hidden',
  },
  outchip: {
    display: 'flex',
    overflow: 'scroll',
  },
  chip: {
    marginRight: '4px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttonSample: {
    borderRadius: '20px',
    backgroundColor: '#0D5BF1',
    color: '#FFFFFF',
  },
  buttonBuy: {
    borderRadius: '20px',
    backgroundColor: '#0DF1C8',
  },
}));

const Parcours = ({ parcours, fullparcours }) => {
  const classes = ParcoursStyles();
  const filterUnique = [...fullparcours].filter((fil) => {
    return fil.course_id === parcours.course_id;
  });
  const uniqueLabels = _.uniqBy(filterUnique, 'label');

  const contextValue = useContext(CurrentCourseContext);

  const handleButtonClick = (e) => {
    const data = e.currentTarget.id;
    contextValue.updateMap(data);
  };

  return (
    <>
      <div className={classes.pageContainer}>
        <Card className={classes.outcard}>
          <ReactPlayer
            className={classes.video}
            url={parcours.course_teaser}
            width="100"
            height="100"
          />
          <div className={classes.contentContainer}>
            <div className={classes.outchip}>
              {uniqueLabels.map((parc) => {
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
            </div>
            <div className={classes.parcoursHeader}>
              <Link to={`/parcoursinfo/${parcours.course_id}`}>
                <Typography className={classes.name}>
                  <Box lineHeight={1.2}>{parcours.course_name}</Box>
                </Typography>
              </Link>
              <Chip
                className={classes.price}
                label={`${parcours.price} €`}
                variant="outlined"
                size="small"
              />
            </div>
            <Typography className={classes.description}>
              {parcours.course_description}
            </Typography>
            <div className={classes.buttons}>
              <Button
                variant="contained"
                size="small"
                className={classes.buttonSample}
                id={parcours.course_id}
                onClick={handleButtonClick}
              >
                Voir le parcours
              </Button>
              <Button
                variant="contained"
                size="small"
                className={classes.buttonBuy}
              >
                Essai gratuit
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Parcours;

Parcours.propTypes = {
  parcours: PropTypes.string.isRequired,
  fullparcours: PropTypes.string.isRequired,
};
