import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import * as _ from 'lodash';
import { useParams } from 'react-router-dom';
import { ApiContext } from '../../contexts/ApiContext';

const Styles = makeStyles((theme) => ({
  root: {
    zIndex: 20,
    position: 'fixed',
    bottom: theme.spacing(11),
    right: theme.spacing(2),
  },
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 15,
    alignItems: 'center',
  },
  avatar: {
    marginLeft: 15,
  },
  video: {
    marginTop: 10,
  },
  outchip: {
    margin: '10px 0px 10px 20px',
  },
  chip: {
    margin: 3,
  },
  duree: {
    marginRight: 20,
  },
  name: {
    fontWeight: 'bold',
    marginLeft: 20,
  },
  description: {
    margin: '0px 20px 10px 20px',
  },
  horizontalLine: {
    display: 'flex',
    border: '0.8px solid #FFD3C8',
    width: '100%',

    marginTop: 5,
    marginBottom: 15,
  },
  comment: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  pen: {
    height: 35,
    marginRight: 20,
  },
  title: {
    fontWeight: 'bold',
  },
}));

const CourseDisplay = () => {
  const classes = Styles();
  const { course } = useContext(ApiContext);
  const { id } = useParams();

  const uniqueCourseById = _.uniqBy([...course], 'course_id');
  const uniqueLabels = _.uniqBy([...course], 'label');

  return (
    <div>
      {uniqueCourseById
        .filter((courses) => {
          return courses.id === Number(id);
        })
        .map((courses) => (
          <div>
            <div className={classes.head}>
              <Avatar className={classes.avatar} alt="Profile Picture" src="" />
            </div>
            <div className={classes.video}>
              <ReactPlayer
                className={classes.video}
                url={courses.course_teaser}
                width="100"
                height="100"
              />
            </div>
            <div className={classes.outchip}>
              {uniqueLabels
                .filter((parc) => {
                  return course.course_id === parc.course_id;
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
            </div>
            <div>
              <Typography className={classes.name}>
                {courses.course_name}
              </Typography>
            </div>
            <div className={classes.description}>
              <Typography>{courses.course_description}</Typography>
            </div>
            <span className={classes.horizontalLine} />
          </div>
        ))}
    </div>
  );
};

export default CourseDisplay;
