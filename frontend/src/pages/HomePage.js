import React from "react";
import Posts from "../components/Posts";
import FieldLocationWidget from "../components/FieldLocationWidget.";
import WeatherWidget from "../components/WeatherWidget";

const HomePage = () => {
  return (
    <div className="home">
      <h1>Üdvözlünk a Pilisszántó Sportegyesület weboldalán!</h1>
      <Posts />
      <FieldLocationWidget />
      <WeatherWidget />
    </div>
  );
};

export default HomePage;
