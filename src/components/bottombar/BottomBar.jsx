import React from 'react';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import bottomBarStyles from './BottomBarStyles';
import FabButton from '../fabbutton/FabButton';
import '../../App.scss';

export default function LabelBottomNavigation() {
  const classes = bottomBarStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="footer">
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
          to="/Parcours"
          classes={{
            root: classes.element,
            selected: classes.selected,
          }}
          label="Parcours"
          value="parcours"
          icon={<DirectionsWalkIcon className={classes.icons} />}
        />
        <FabButton />
        <BottomNavigationAction
          component={Link}
          to="/Favoris"
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
          to="/Profil"
          classes={{
            root: classes.element,
            selected: classes.selected,
          }}
          label="Profil"
          value="profil"
          icon={<AccountCircleIcon className={classes.icons} />}
        />
      </BottomNavigation>
    </div>
  );
}
