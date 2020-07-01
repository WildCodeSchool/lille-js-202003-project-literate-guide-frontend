import { useState, useEffect } from 'react';
// getcurrentposition => https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition

const useCurrentLocation = (options = {}) => {
  const [location, setLocation] = useState();
  const [error, setError] = useState();
  const handleSuccess = (pos) => {
    const { lat, lng } = pos.coords;

    setLocation({
      lat,
      lng,
    });
  };
  const handleError = (err) => {
    setError(err.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;
    if (!geolocation) {
      setError('Geolocation is not supported.');
      return;
    }
    geolocation.getCurrentPosition(handleSuccess, handleError, options);
  }, [options]);

  return { location, error };
};

export default useCurrentLocation;
