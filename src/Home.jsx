import React from 'react';
import SliderOneImage from "./SliderOneImage";
import SliderOneContent from "./SliderOneContent";
import HomePartThree from "./homePartThree";
import HomePartFour from "./homePartFour";

const Home = () => {
  return (
    <div className="home">
      <SliderOneImage/>
      <SliderOneContent/>
      <HomePartThree/>
      <HomePartFour/>
    </div>
  );
};

export default Home;