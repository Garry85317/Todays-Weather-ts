import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const WeatherCard: React.FC = () => {
  const { city, country } = useSelector((state: RootState) => state.search);
  const { main, description, minTemp, maxTemp, humidity, time } = useSelector(
    (state: RootState) => state.weatherData
  );

  return (
    <div className="weatherCard">
      <div className="container">
        <div className="main">
          {main}
          <div className="location">
            {country}, {city}
          </div>
        </div>
        <div className="element">
          <p>Description: </p>
          <div>{description}</div>
        </div>
        <div className="element">
          <p>Temperature: </p>
          <div>
            {minTemp}℉ ~ {maxTemp}℉
          </div>
        </div>
        <div className="element">
          <p>Humidity: </p>
          <div>{humidity}%</div>
        </div>
        <div className="element">
          <p>Time: </p>
          <div>{time}</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
