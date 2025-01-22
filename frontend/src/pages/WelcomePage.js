import React, { useState, useEffect } from "react";

const WelcomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/assets/image1.JPG",
    "/assets/image2.JPG",
    "/assets/image3.JPG",
    "/assets/image5.JPG",
    "/assets/image6.JPG",
    "/assets/image7.JPG",
    "/assets/image8.JPG",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="welcome-container">
      <div className="carousel">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
      </div>
    </div>
  );
};

export default WelcomePage;
