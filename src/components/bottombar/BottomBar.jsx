import React from 'react';
import { Link } from 'react-router-dom';
import {
  BottomNavigation,
  BottomNavigationAction,
  Fab,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import bottomBarStyles from './BottomBarStyles';

export default function LabelBottomNavigation() {
  const classes = bottomBarStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
      showLabels
    >
      <BottomNavigationAction
        component={Link}
        to="/"
        classes={{
          root: classes.element,
          selected: classes.selected,
        }}
        label="Explore"
        value="explore"
        icon={<ExploreIcon className={classes.icons} />}
      />
      <BottomNavigationAction
        component={Link}
        to="Parcours"
        classes={{
          root: classes.element,
          selected: classes.selected,
        }}
        label="Parcours"
        value="parcours"
        icon={<DirectionsWalkIcon className={classes.icons} />}
      />
      <Fab color="primary" aria-label="add" className={classes.fabButton}>
        <AddIcon />
      </Fab>
      <BottomNavigationAction
        component={Link}
        to="Favoris"
        classes={{
          root: classes.element,
          selected: classes.selected,
        }}
        label="Favoris"
        value="favoris"
        icon={<FavoriteIcon className={classes.icons} />}
      />
      <BottomNavigationAction
        component={Link}
        to="Profil"
        classes={{
          root: classes.element,
          selected: classes.selected,
        }}
        label="Profil"
        value="profil"
        icon={<AccountCircleIcon className={classes.icons} />}
      />
    </BottomNavigation>
  );
}
