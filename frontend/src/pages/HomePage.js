import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";

const HomePage = () => {
  return (
    <div className="home">
      <h1>Üdvözlünk a Pilisszántó Sportegyesület weboldalán!</h1>
      <Posts />
    </div>
  );
};

export default HomePage;
