import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
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
        className={classes.element}
        label="Explore"
        value="explore"
        icon={<ExploreIcon className={classes.icons} />}
      />
      <BottomNavigationAction
        className={classes.element}
        label="Parcours"
        value="parcours"
        icon={<DirectionsWalkIcon className={classes.icons} />}
      />
      <BottomNavigationAction
        className={classes.element}
        label="Favoris"
        value="favoris"
        icon={<FavoriteIcon className={classes.icons} />}
      />
      <BottomNavigationAction
        className={classes.element}
        label="Profil"
        value="profil"
        icon={<AccountCircleIcon className={classes.icons} />}
      />
    </BottomNavigation>
  );
}
