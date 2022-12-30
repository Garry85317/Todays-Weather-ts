import React from "react";
import moment from "moment/moment";

import { AiOutlineSearch } from "react-icons/Ai";
import { BsFillTrashFill } from "react-icons/Bs";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/features/searchSlice";
import { deleteHistory } from "../redux/features/historySlice";

import { Location } from "../redux/type";
import type { RootState } from "../redux/store";

const History: React.FC = () => {
  const dispatch = useDispatch();
  const history = useSelector((state: RootState) => state.history);
  const handleSearch = (country?: string, city?: string) => {
    const time = moment().format("LTS");
    dispatch(setSearch({ city, country, time }));
  };
  const handleClear = (item: Location) => {
    dispatch(deleteHistory(history.filter((res) => res !== item)));
  };

  return (
    <div className="history">
      <div className="title">
        <h2>Search History</h2>
      </div>
      <div className="table">
        <ul>
          {history.length
            ? history.map((item: Location, i) => (
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
