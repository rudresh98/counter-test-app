import React from "react";
import Search from "./Search";
import WeatherDetails from "./WeatherDetails";

const Weather = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-5xl">Weather</h1>
      <div className="flex justify-center items-center w-full my-3">
        <Search />
      </div>
      <div className="my-2">
        <WeatherDetails />
      </div>
    </div>
  );
};

export default Weather;
