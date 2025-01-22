import React from "react";
import Posts from "../components/Posts";
import FieldLocationWidget from "../components/FieldLocationWidget.";

const HomePage = () => {
  return (
    <div className="home">
      <h1>Üdvözlünk a Pilisszántó Sportegyesület weboldalán!</h1>
      <Posts />
      <FieldLocationWidget />
    </div>
  );
};

export default HomePage;
