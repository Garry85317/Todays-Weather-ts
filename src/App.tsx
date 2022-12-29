import { useState, useEffect } from "react";
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

export interface location {
  city?: string;
  country?: string;
  time: string;
}

export interface weather {
  main: string;
  description: string;
  minTemp: string;
  maxTemp: string;
  humidity: string;
  time: string;
}

function App() {
  const [weatherData, setWeatherData] = useState<weather>({
    main: "",
    description: "",
    minTemp: "",
    maxTemp: "",
    humidity: "",
    time: "",
  });

  const [search, setSearch] = useState<location>({
    city: "tw",
    country: "taipei",
    time: moment().format("LTS"),
  });

  const [history, setHistory] = useState(() => {
    return JSON.parse(localStorage.getItem("history") || "[]");
  });

  const { data, isFetching, error } = useGetWeatherDataQuery(search);

  const MainSection = () => {
    if (isFetching) return <Loading />;
    else if (error) return <Error />;
    else return <WeatherCard search={search} weatherData={weatherData} />;
  };

  useEffect(() => {
    setWeatherData({
      main: data?.weather[0].main,
      description: data?.weather[0].description,
      minTemp: data?.main.temp_min,
      maxTemp: data?.main.temp_max,
      humidity: data?.main.humidity,
      time: moment().format("lll"),
    });
    if (data)
      setHistory([
        ...history,
        { city: search.city, country: search.country, time: search.time },
      ]);
  }, [data]);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  return (
    <div className="App">
      <Header />
      <Search setSearch={setSearch} />
      <MainSection />
      <History
        history={history}
        setHistory={setHistory}
        setSearch={setSearch}
      />
    </div>
  );
}

export default App;
