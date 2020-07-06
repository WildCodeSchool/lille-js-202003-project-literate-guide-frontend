import React, { useState } from 'react';
import axios from 'axios';
import InputBase from '@material-ui/core/InputBase';

function SearchBar() {
  const [location, setValue] = useState({
    center: [50.633333, 3.066667],
    zoom: 22,
    address: '',
    autocomplete: [],
  });

  const handleChange = (e) => {
    setValue({ address: e.target.value });
    axios
      .get(`https://api-adresse.data.gouv.fr/search/?q=${e.address}`)
      .then((res) => {
        const latitude = res.data.features[0].geometry.coordinates[0];
        const longitude = res.data.features[0].geometry.coordinates[1];
        setValue({ center: [latitude, longitude] });
      });
  };

  const completeInput = (value) => {
    setValue({ address: value, autocomplete: [] });
    axios
      .get(`https://api-adresse.data.gouv.fr/search/?q=${value.address}`)
      .then((res) => {
        const longitude = res.data.features[0].geometry.coordinates[1];
        const latitude = res.data.features[0].geometry.coordinates[0];
        setValue({ center: [longitude, latitude] });
      });
  };

  const autoComplete = () => {
    const addresses = location.autocomplete;
    return (
      <div>
        {addresses.map((address, i) => {
          return (
            <p key={i}>
              <span onSelect={() => completeInput(address.properties.label)}>
                {address.properties.label}
              </span>
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <form>
        <InputBase
          style={{ width: '300px' }}
          type="text"
          name="address"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
          value={location.address}
          placeholder="Recherche une adresse"
          autoCorrect="off"
        />
      </form>
      <div>{autoComplete()}</div>
    </div>
  );
}
export default SearchBar;
