import React, { useState, useEffect } from 'react';
import './Imageslider.css';
import logof from '../../assets/foundationlogo.png'

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  

    

  // Automatically change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  return (
    <div className="image-slider">
      <div className="image-slider__container">
        <button className="image-slider__button" onClick={goToPrevious}>❮</button>
     
          <img
            src={logof}
            className="image-slider__image"
          />
      
        <button className="image-slider__button" onClick={goToNext}>❯</button>
        <div className="image-slider__searchbar">
        
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
