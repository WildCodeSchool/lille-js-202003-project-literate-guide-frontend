import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

export const LocationContext = createContext();
const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 3, // 3 min (1000 ms * 60 sec * 3 minute)
  maximumAge: 1000 * 3600 * 24, // 24 hour
};
export const LocationProvider = (props) => {
  const [positionLocation, setPositionLocation] = useState([
    50.630943,
    3.060299,
  ]);
  useEffect(() => {
    const watchID = navigator.geolocation.watchPosition((pos) => {
      setPositionLocation([pos.coords.latitude, pos.coords.longitude]);
    });
    return () => {
      navigator.geolocation.clearWatch(watchID, geolocationOptions);
    };
  }, [setPositionLocation]);
  const { children } = props;
  return (
    <LocationContext.Provider value={positionLocation}>
      {children}
    </LocationContext.Provider>
  );
};

LocationProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.number).isRequired,
};
