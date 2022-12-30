import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import "./App.css";
import "./assets/css/style.css";

import Header from "./components/Header";
import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";
import History from "./components/History";
import Loading from "./components/Loading";
import Error from "./components/Error";

import { useGetWeatherDataQuery } from "./redux/services/getWeatherApi";
import { setHistory } from "./redux/features/historySlice";
import { setWeatherData } from "./redux/features/weatherSlice";
import type { RootState } from "./redux/store";

function App() {
  const dispatch = useDispatch();

  const { search, history } = useSelector((state: RootState) => state);

  const { data, isFetching, error } = useGetWeatherDataQuery(search);

  const MainSection = () => {
    if (isFetching) return <Loading />;
    else if (error) return <Error />;
    else return <WeatherCard />;
  };

  useEffect(() => {
    dispatch(
      setWeatherData({
        main: data?.weather[0].main,
        description: data?.weather[0].description,
        minTemp: data?.main.temp_min,
        maxTemp: data?.main.temp_max,
        humidity: data?.main.humidity,
        time: moment().format("lll"),
      })
    );
    if (data) dispatch(setHistory(search));
  }, [data]);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  return (
    <div className="App">
      <Header />
      <Search />
      <MainSection />
      <History />
    </div>
  );
}

export default App;
