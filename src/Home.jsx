import React from 'react';
import SliderOneImage from "./SliderOneImage";
import SliderOneContent from "./SliderOneContent";
import HomePartThree from "./homePartThree";
const Home = () => {
  return (
    <div className="home">
      <SliderOneImage/>
      <SliderOneContent/>
      <HomePartThree/>
    </div>
  );
};

export default Home;