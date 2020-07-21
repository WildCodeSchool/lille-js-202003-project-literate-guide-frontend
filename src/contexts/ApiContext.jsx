import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { backend } from '../conf';

export const ApiContext = createContext(null);

export const ApiProvider = (props) => {
  const [poi, setPoi] = useState([]);
  const [capsules, setCapsules] = useState([]);
  const [course, setCourse] = useState([]);
  const [tags, setTags] = useState([]);
  const value = {
    poi,
    setPoi,
    capsules,
    setCapsules,
    course,
    setCourse,
    tags,
    setTags,
  };

  const getPoi = () => {
    axios.get(`${backend}/poi`).then((res) => {
      setPoi(res.data);
    });
  };

  const getCapsules = () => {
    axios.get(`${backend}/capsules`).then((res) => {
      setCapsules(res.data);
    });
  };

  const getCourse = () => {
    axios.get(`${backend}/courses`).then((res) => {
      setCourse(res.data);
    });
  };

  const getTags = () => {
    axios.get(`${backend}/tags`).then((res) => {
      setTags(res.data);
    });
  };

  useEffect(() => {
    getCapsules();
    getPoi();
    getCourse();
    getTags();
  }, []);

  const { children } = props;
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

ApiProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
