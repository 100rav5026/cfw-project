import React from 'react';
import SliderTwo from './images/homeSlideTwo.png'
import SliderTwoContent from './SliderTwoContent';
import DesignerLogo from './images/designer logo.png';

const SliderTwoImage = () => {
  return (
    <div className="image-container">
        <img src={SliderTwo} alt="Background" className="background-image" />
        <SliderTwoContent/>
        <img src={DesignerLogo} alt="Background" className="designer-logo" />
    </div>
  );
};

export default SliderTwoImage;