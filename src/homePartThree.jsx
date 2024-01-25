import React from 'react';
import HomePartThreeComponent from './homePartThreeComponent';
import numberOne from './images/number_one.jpg';
import numberTwo from './images/number_two.jpg';
import numberThree from './images/number_three.jpg';

const HomePartThree = () => {
  return (
    <div className="homePartThree">
        <HomePartThreeComponent number = {numberOne} header = "ENJOY CONTRAST" para = "Lorem ipsum dolor sit amet, conse tetur adipi scing elit, sed do icim elienit eiusmod teorlaboret dolore."/>
        <HomePartThreeComponent number = {numberTwo} header = "TOP BLOGGING" para = "Lorem ipsum dolor sit amet, conse tetur adipi scing elit, sed do icim elienit eiusmod teorlaboret dolore."/>
        <HomePartThreeComponent number = {numberThree} header = "CREATIVE STYLE" para = "Lorem ipsum dolor sit amet, conse tetur adipi scing elit, sed do icim elienit eiusmod teorlaboret dolore."/>
    </div>
  );
};

export default HomePartThree;