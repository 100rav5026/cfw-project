import React from 'react';
import SliderOne from './images/homeSlideOne.jpg'

const SliderOneImage = () => {
  return (
    <div className="image-container">
      <img src={SliderOne} alt="Background" className="background-image" />
    </div>
  );
};

export default SliderOneImage;
