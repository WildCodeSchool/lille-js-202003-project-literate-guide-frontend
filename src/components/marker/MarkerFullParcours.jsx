import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as _ from 'lodash';
import { Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import Capsule from '../capsule/Capsule';
import { ApiContext } from '../../contexts/ApiContext';

const IconStyle = new Icon({
  iconUrl: '/images/pin.png',
  iconSize: [34, 34],
});

const MarkerExplore = () => {
  const { course, capsules } = useContext(ApiContext);

  const allCourses = [...course];
  const allCaps = [...capsules];
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('body');
  const [currentPoi, setPoi] = useState(0);

  const handleScroll = (scrollType) => () => {
    setScroll(scrollType);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const uniqueCapsuleById = _.uniqBy(allCaps, 'capsule_id');

  console.log(id);
  return (
    <div>
      {allCourses
        .filter((parc) => {
          return parc.course_id === Number(id);
        })
        .map((parc) => {
          return (
            <Marker
              key={parc.id}
              position={[parc.latitude, parc.longitude]}
              icon={IconStyle}
              onClick={() => {
                handleOpen();
                handleScroll('body');
                setPoi(parc.poi_id);
              }}
            />
          );
        })}
      {currentPoi !== 0 && (
        <div className="sizePopUp">
          <Dialog
            open={open}
            onClose={handleClose}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            {uniqueCapsuleById
              .filter((caps) => {
                return currentPoi === caps.poi_id;
              })
              .map((cap) => {
                return (
                  <>
                    <DialogTitle id="scroll-dialog-title" key={cap.poi_id}>
                      {cap.poi_name}
                    </DialogTitle>
                    <DialogContent dividers={scroll === 'body'}>
                      <Capsule key={cap.id} capsule={cap} />
                    </DialogContent>
                  </>
                );
              })}
          </Dialog>
        </div>
      )}
    </div>
  );
};
export default MarkerExplore;
