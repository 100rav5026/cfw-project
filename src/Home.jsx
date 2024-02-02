import React from 'react';
import SliderOneImage from "./SliderOneImage";
import SliderOneContent from "./SliderOneContent";
import HomePartThree from "./homePartThree";
import HomePartFour from "./homePartFour";
import Footer from './footer';
import SliderTwoImage from './SliderTwoImg';
import HomePartFive from './homePartFive';
import HomePartSix from './homePartSix'
import HomePartSeven from './homePartSeven';
import SliderThreeImage from './SliderThreeImg';


const Home = () => {
  return (
    <div className="home">
      <SliderOneImage/>
      <SliderOneContent/>
      <HomePartThree/>
      <HomePartFour/>
      <SliderTwoImage/>
      <HomePartFive/>
      <SliderThreeImage/>
      <HomePartSix/>
      <HomePartSeven/>
      <Footer/>
    </div>
  );
};

export default Home;