import React from 'react';
import RegistrationImage from './images/RegistrationPage2.jpg'

const RegistrationImageTwo = () => {
  return (
    <div className="image-container-2">
      <div className='left-box-2'>
          <h1 class="register">REGISTER NOW</h1>
          <p>Are you ready to showcase your style on the runway? The most anticipated event of the year, Cudwarm Fashion Week 2024, is calling all fashion enthusiasts to be part of the glamour and elegance!</p>
          <div class="button-main">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdC8j3SaqBRdmorMhTU8r_iXrc_1ZPhXBpTQSe7HjlDUeMMEA/viewform?usp=sharing" target="_other">
              <button className='button' >Register Now!!!</button>
            </a>
            <a href="www.google.com">
              <button className='button' >Pay Now</button>
            </a>
          </div>
      </div>
      <div className='right-box-2'>
          <img src={RegistrationImage} alt="Background" className="background-image" />
      </div>
    </div>
  );
};

export default RegistrationImageTwo;
