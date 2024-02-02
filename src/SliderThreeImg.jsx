import React from 'react';
import SliderThree from './images/ModernModelingImg.jpg';
import cfw_logo from './images/cfw_logo.jpg';
import SliderThreeContent from './SliderThreeContent';

const SliderThreeImage = () => {
  return (
    <div className='SliderThreeImg'>
        <img src={SliderThree} alt="Background" className="background-image" />
        <img src={cfw_logo} alt='CFW logo' className='cfw_logo'/>
        <SliderThreeContent/>
    </div>
  );
};

export default SliderThreeImage;