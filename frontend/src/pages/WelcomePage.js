import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.css";

import image1 from "../assets/image1.JPG";
import image2 from "../assets/image2.JPG";
import image3 from "../assets/image3.JPG";
import image5 from "../assets/image5.JPG";
import image6 from "../assets/image6.JPG";
import image7 from "../assets/image7.JPG";
import image8 from "../assets/image8.jpg";


const WelcomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
  
    const images = [image1, image2, image3, image5, image6, image7, image8];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [images.length]);
  
    const handleNavigate = () => {
      navigate("/main");
    };
  
    return (
      <div className="welcome-container">
        <div className="carousel">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
        </div>
        <div className="welcome-content">
          <h1>Üdvözöllek a Pilisszántó Sportegyesület weboldalán!</h1>
          <p>Kattints a tovább gombra az oldal megtekintéséhez.</p>
          <button onClick={handleNavigate}>Tovább</button>
        </div>
      </div>
    );
  };
  
  export default WelcomePage;