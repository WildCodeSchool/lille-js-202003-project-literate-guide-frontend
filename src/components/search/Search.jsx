import React, { Component } from 'react';
import axios from 'axios';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
// import SearchStyles from './SearchStyles';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [50.633333, 3.066667],
      address: '',
      autocomplete: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.completeInput = this.completeInput.bind(this);
    this.autoComplete = this.autoComplete.bind(this);
  }

  handleChange(e) {
    this.setState({ address: e.target.value });
    axios
      .get(`https://api-adresse.data.gouv.fr/search/?q=${e.target.value}`)
      .then((res) => {
        this.setState({ autocomplete: res.data.features });
      });
  }

  completeInput(value) {
    this.setState({ address: value, autocomplete: [] });
    axios
      .get(`https://api-adresse.data.gouv.fr/search/?q=${value}`)
      .then((res) => {
        const longitude = res.data.features[0].geometry.coordinates[1];
        const latitude = res.data.features[0].geometry.coordinates[0];
        this.setState({ center: [longitude, latitude] });
      });
  }

  autoComplete() {
    const addresses = this.state.autocomplete;
    return (
      <div>
        {addresses.map((address, i) => {
          return (
            <p key={i}>
              <span
                onClick={() => this.completeInput(address.properties.label)}
              >
                {address.properties.label}
              </span>
            </p>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>
          <SearchIcon />
        </div>
        <form onSubmit={this.handleSubmit}>
          <InputBase
            style={{ width: '300px' }}
            type="text"
            name="address"
            onChange={this.handleChange}
            autoComplete="off"
            value={this.state.address}
            placeholder="Recherche une adresse"
            autoCorrect="off"
            inputProps={{ 'aria-label': 'search' }}
          />
        </form>
        <div>{this.autoComplete()}</div>
      </div>
    );
  }
}
export default Search;
