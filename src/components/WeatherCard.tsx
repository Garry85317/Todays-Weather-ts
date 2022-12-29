import React from "react";
import { location, weather } from "../App";

interface PostsProps {
  search: location;
  weatherData: weather;
}

const WeatherCard: React.FC<PostsProps> = ({ search, weatherData }) => {
  if (!weatherData.main) return <div className="weatherCard"></div>;

  const { main, description, minTemp, maxTemp, humidity, time } = weatherData;
  const { city, country } = search;

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
