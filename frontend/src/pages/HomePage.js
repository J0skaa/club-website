import React from "react";
import Posts from "../components/Posts";
import FieldLocationWidget from "../components/FieldLocationWidget.";
import WeatherWidget from "../components/WeatherWidget";

const HomePage = () => {
  return (
    <div className="home">
      <div className="posts-container">
        <h1>Üdvözlünk a Pilisszántó Sportegyesület weboldalán!</h1>
        <Posts />
      </div>
      <div className="widgets-container">
        <FieldLocationWidget />
        <WeatherWidget />
      </div>
    </div>
  );
};

export default HomePage;
