import React from 'react';
import HomePartThreeComponent from './homePartThreeComponent';
import numberOne from './images/number_one.jpg';
import numberTwo from './images/number_two.jpg';
import numberThree from './images/number_three.jpg';

const HomePartThree = () => {
  return (
    <div className="homePartThree">
        <HomePartThreeComponent number = {numberOne} header = "ENJOY CONTRAST" para = "Explore the captivating interplay of bold contrasts at our fashion week, where juxtaposed elements redefine sartorial boundaries."/>
        <HomePartThreeComponent number = {numberTwo} header = "TOP NOTCH QUALITY" para = "Experience runway elegance that transcends trends our fashion week sets the standard for unparalleled style and sophistication."/>
        <HomePartThreeComponent number = {numberThree} header = "CREATIVE STYLE" para = "Our fashion week showcases avant-garde creativity, where style becomes a canvas for innovative expression."/>
    </div>
  );
};

export default HomePartThree;