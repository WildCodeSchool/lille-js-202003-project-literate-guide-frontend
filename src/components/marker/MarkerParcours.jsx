import React, { useContext } from 'react';
import { Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import { ApiContext } from '../../contexts/ApiContext';
import CurrentCourseContext from '../../contexts/CurrentCourseContext';

const IconStyle = new Icon({
  iconUrl: '/images/pin.png',
  iconSize: [34, 34],
});

const MarkerExplore = () => {
  const { course } = useContext(ApiContext);
  const allCourses = [...course];

  const contextValue = useContext(CurrentCourseContext);

  return (
    <div>
      {allCourses
        .filter((parc) => {
          return parc.course_id === Number(contextValue.currentCourse);
        })
        .map((parc) => {
          return (
            <Marker
              position={[parc.latitude, parc.longitude]}
              icon={IconStyle}
            />
          );
        })}
    </div>
  );
};
export default MarkerExplore;
