import React, { useState } from 'react';
import axios from 'axios';
import InputBase from '@material-ui/core/InputBase';

function SearchBar() {
  const [location, setLocation] = useState({
    center: [50.633333, 3.066667],
    address: '',
    autocomplete: [],
  });

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

  const autoCompleted = () => {
    const addresses = setLocation(location.autocomplete);
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
          onChange={handleChange}
          autoComplete="off"
          value={location.address}
          placeholder="Recherche une adresse"
          autoCorrect="off"
        />
      </form>
      <div>{autoCompleted()}</div>
    </div>
  );
}
export default SearchBar;
