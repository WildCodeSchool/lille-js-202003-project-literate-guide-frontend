import { useState, useEffect, useRef } from 'react';

const useWatchLocation = (options = {}) => {
  const [location, setLocation] = useState();
  const [error, setError] = useState();
  const locationWatchId = useRef(null);

  const handleSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;

    setLocation({
      latitude,
      longitude,
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

    locationWatchId.current = geolocation.watchPosition(
      handleSuccess,
      handleError,
      options
    );
  }, [options]);

  return { location, error };
};

export default useWatchLocation;
