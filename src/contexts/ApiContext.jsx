import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { backend } from '../conf';

export const ApiContext = createContext(null);

export const ApiProvider = (props) => {
  const [poi, setPoi] = useState([]);
  const [capsules, setCapsules] = useState([]);
  const value = {
    poi,
    setPoi,
    capsules,
    setCapsules,
  };

  const getPoi = () => {
    axios
      .get(`${backend}/poi`)
      .then((res) => {
        setPoi(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPoi();
  }, []);

  const getCapsules = () => {
    axios
      .get(`${backend}/capsules`)
      .then((res) => {
        setCapsules(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCapsules();
  }, []);

  const { children } = props;
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

ApiProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
