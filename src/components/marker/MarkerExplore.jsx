import React, { useState, useContext, useEffect, useRef } from 'react';
import * as _ from 'lodash';
import { Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Capsule from '../capsule/Capsule';
import { ApiContext } from '../../contexts/ApiContext';

const IconStyle = new Icon({
  iconUrl: '/images/pin.png',
  iconSize: [34, 34],
});

const MarkerExplore = () => {
  const { poi, capsules } = useContext(ApiContext);
  const allPoi = [...poi];
  const capsulesPoint = [...capsules];
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('body');
  const [currentPoi, setPoi] = useState(0);

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  console.log(capsulesPoint);
  const uniqueCapsuleById = _.uniqBy(capsulesPoint, 'capsule_id');

  return (
    <div>
      {allPoi[0] &&
        allPoi.map((pois) => {
          return (
            <Marker
              key={pois.id}
              position={[pois.latitude, pois.longitude]}
              icon={IconStyle}
              onClick={() => {
                handleClickOpen('body');
                setPoi(pois.id);
              }}
            />
          );
        })}
      {currentPoi !== 0 && (
        <div>
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
                    <DialogTitle id="scroll-dialog-title" key={cap.id}>
                      {cap.capsule_name}
                    </DialogTitle>
                    <DialogContent
                      ref={descriptionElementRef}
                      dividers={scroll === 'body'}
                    >
                      <Capsule key={cap.id} capsule={cap} />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
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
