import React from "react";
import { useState } from "react";
import { fetchPlace } from '../utils/fetchPlace';

const CityAutoComp = ({handleChange, value}) => {
  const [city, setCity] = useState(value);
  const [autocompleteCities, setAutocompleteCities] = useState([]);
  const [autocompleteErr, setAutocompleteErr] = useState("");

// const twoOnChange = e => {
//     this.handleCityChange(e)
//     this.handleChange
// }

  const handleCityChange = async (e) => {
    setCity(e.target.value);
    if (!city) return;

    const res = await fetchPlace(city);
    !autocompleteCities.includes(e.target.value) &&
      res.features &&
      setAutocompleteCities(res.features.map((place) => place.place_name));
    res.error ? setAutocompleteErr(res.error) : setAutocompleteErr("");
  };

  return (
    <div className="placesAutocomplete">
      <div className="placesAutocomplete__inputWrap">
        <label htmlFor="city" className="label">
          {autocompleteErr && (
            <span className="inputError">{autocompleteErr}</span>
          )}
        </label>
        <input
          list="places"
          type="text"
          id="city"
          name="city"
          onChange={handleCityChange}
          value={this.state.value}
          required
          pattern={autocompleteCities.join("|")}
          autoComplete="off"
        />
        <datalist id="places">
          {autocompleteCities.map((city, i) => (
            <option key={i}>{city}</option>
          ))}
        </datalist>
      </div>
    </div>
  );
};


export default CityAutoComp