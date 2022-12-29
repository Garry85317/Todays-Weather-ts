import React from "react";
import moment from "moment/moment";

import { location } from "../App";

import { AiOutlineSearch } from "react-icons/Ai";
import { BsFillTrashFill } from "react-icons/Bs";

interface props {
  history: location[];
  setHistory: React.Dispatch<React.SetStateAction<location[]>>;
  setSearch: React.Dispatch<React.SetStateAction<location>>;
}

const History: React.FC<props> = ({ history, setHistory, setSearch }) => {
  const handleSearch = (country?: string, city?: string) => {
    const time = moment().format("LTS");
    setSearch({ country, city, time });
  };
  const handleClear = (item: location) => {
    setHistory(history.filter((res) => res !== item));
  };

  return (
    <div className="history">
      <div className="title">
        <h2>Search History</h2>
      </div>
      <div className="table">
        <ul>
          {history.length
            ? history.map((item: location, i) => (
                <li key={i}>
                  <div className="left">
                    {i + 1}. {item.country},{item.city}
                  </div>
                  <div className="right">
                    <p>{item.time?.toString()}</p>
                    <AiOutlineSearch
                      onClick={() => handleSearch(item.country, item.city)}
                    />
                    <BsFillTrashFill onClick={() => handleClear(item)} />
                  </div>
                </li>
              ))
            : "No Record"}
        </ul>
      </div>
    </div>
  );
};

export default History;
