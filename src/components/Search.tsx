import React, { useState } from "react";
import moment from "moment";

import { useDispatch } from "react-redux";
import { setSearch } from "../redux/features/searchSlice";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  const handleCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const time = moment().format("LTS");
    dispatch(setSearch({ city, country, time }));
    setCity("");
    setCountry("");
  };
  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    localStorage.removeItem("history");
  };

  return (
    <div className="search">
      <form>
        <div className="input-group">
          <div className="input">
            <label>City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => handleCity(e)}
            ></input>
          </div>
          <div className="input">
            <label>Country</label>
            <input
              type="text"
              value={country}
              onChange={(e) => handleCountry(e)}
            ></input>
          </div>
        </div>
        <div className="button-group">
          <button className="button" onClick={handleClick}>
            Search
          </button>
          <button className="button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
