import React from 'react';
import Zoom from '@material-ui/core/Zoom';
import { Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import fabButtonStyles from './FabButtonStyles';

function FabButton() {
  const classes = fabButtonStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Zoom in={checked}>
          <Fab
            component={Link}
            to="AddCapsule"
            color="primary"
            aria-label="addCapsule"
            className={classes.addCapsule}
            size="medium"
          >
            <LibraryAddIcon />
          </Fab>
        </Zoom>
        <Zoom in={checked}>
          <Fab
            component={Link}
            to="AddParcours"
            color="primary"
            aria-label="addParcours"
            className={classes.addParcours}
            size="medium"
          >
            <ShowChartIcon />
          </Fab>
        </Zoom>
      </div>
      <Fab
        color="primary"
        aria-label="add"
        className={classes.fabButton}
        onClick={handleChange}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}

export default FabButton;
