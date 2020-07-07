import React, { useState } from 'react';
import axios from 'axios';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchStyles from './SearchStyles';

function SearchBar() {
  const [location, setLocation] = useState({
    center: [50.633333, 3.066667],
    address: '',
    autocomplete: [],
  });
  const classes = SearchStyles();

  const handleChange = (e) => {
    setLocation({ address: e.target.value });
    axios
      .get(`https://api-adresse.data.gouv.fr/search/?q=${e.target.value}`)
      .then((res) => {
        setLocation({ autocomplete: res.data.features });
      });
  };

  const completeInput = (value) => {
    setLocation({ address: value, autocomplete: [] });
    axios
      .get(`https://api-adresse.data.gouv.fr/search/?q=${value}`)
      .then((res) => {
        const longitude = res.data.features[0].geometry.coordinates[1];
        const latitude = res.data.features[0].geometry.coordinates[0];
        setLocation({ center: [longitude, latitude] });
      });
  };

  return (
    <div>
      <div className={classes.search}>
        <Grid container alignItems="center">
          <Grid item className={classes.searchIcon}>
            <SearchIcon />
          </Grid>
          <Grid item xs>
            <form>
              <InputBase
                type="text"
                name="address"
                margin="dense"
                onChange={(e) => {
                  handleChange(e);
                }}
                autoComplete="off"
                value={location.address}
                placeholder="Recherche une adresse"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                multiline={true}
              />
            </form>

            <div>
              {location.autocomplete &&
                location.autocomplete.map((address, i) => {
                  return (
                    <Grid container alignItems="center" key={i}>
                      <Grid item>
                        <LocationOnIcon className={classes.icon} />
                      </Grid>
                      <Grid item xs>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          type="button"
                          onClick={() =>
                            completeInput(address.properties.label)
                          }
                        >
                          {address.properties.label}
                        </Typography>
                      </Grid>
                    </Grid>
                  );
                })}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default SearchBar;
