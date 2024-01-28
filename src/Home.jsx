import React from 'react';
import SliderOneImage from "./SliderOneImage";
import SliderOneContent from "./SliderOneContent";
import HomePartThree from "./homePartThree";
import HomePartFour from "./homePartFour";
import Footer from './footer';
import SliderTwoImage from './SliderTwoImg';
import HomePartFive from './homePartFive';

const Home = () => {
  return (
    <div className="home">
      <SliderOneImage/>
      <SliderOneContent/>
      <HomePartThree/>
      <HomePartFour/>
      <SliderTwoImage/>
      <HomePartFive/>
      <Footer/>
    </div>
  );
};

export default Home;