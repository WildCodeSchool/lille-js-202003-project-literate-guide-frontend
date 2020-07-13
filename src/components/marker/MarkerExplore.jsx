import React, { useState, useContext, useEffect, useRef } from 'react';
import { Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
// import DialogContent from '@material-ui/core/DialogContent';
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
  const [scroll, setScroll] = useState('paper');

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

  return (
    <div>
      {allPoi[0] &&
        allPoi.map((pois) => {
          return (
            <Marker
              key={pois.id}
              position={[pois.latitude, pois.longitude]}
              icon={IconStyle}
              onClick={handleClickOpen('paper')}
            >
              {capsulesPoint && (
                <div>
                  {capsulesPoint
                    .filter((capsule) => {
                      return pois.id === capsule.id_poi;
                    })
                    .map((capsule) => (
                      <Dialog
                        key={capsule.id}
                        open={open}
                        onClose={handleClose}
                        scroll={scroll}
                        aria-labelledby="scroll-dialog-title"
                        aria-describedby="scroll-dialog-description"
                      >
                        <Typography key={capsule.id}>
                          {capsule.capsule_name}
                        </Typography>
                        <Capsule key={capsule.id} capsule={capsule} />
                      </Dialog>
                    ))}
                </div>
              )}
              ;
            </Marker>
          );
        })}
      ;
    </div>
  );
};
export default MarkerExplore;
