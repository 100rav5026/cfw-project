import React from "react";
import Navbar from "./navbar";
import SliderOneImage from "./SliderOneImage";
import SliderOneContent from "./SliderOneContent";
import HomePartThree from "./homePartThree";
import HomePartFour from "./homePartFour";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SliderOneImage/>
      <SliderOneContent/>
      <HomePartThree/>
      <HomePartFour/>
    </div>
  );
}

export default App;
