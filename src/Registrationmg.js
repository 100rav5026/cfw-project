
import React from 'react';
import HomePartThreeComponent from './homePartThreeComponent';
import RegistrationPage3 from './images/RegistrationPage3.jpg';
import RegistrationPage4 from './images/RegistrationPage4.jpg';
import RegistrationPage5 from './images/RegistrationPage5.jpg';


const RegistrationImg = () => {
  return (
      <div className="registration-box">
        <HomePartThreeComponent number = {RegistrationPage3} header = "VIRTUAL ROUND" para = "Strut your style from anywhere in the world –our virtual runway awaits your fashion flair!"/>
        <HomePartThreeComponent number = {RegistrationPage4} header = "AUDITION ROUND" para = "Dazzle the runway with your unique style – your audition, your moment, your fashion journey begins here."/>
        <HomePartThreeComponent number = {RegistrationPage5} header = "FINALE" para = "Elevate the runway as we unveil the grand finale – where fashion meets its breathtaking crescendo."/>
    </div>
  );
};

export default RegistrationImg;
