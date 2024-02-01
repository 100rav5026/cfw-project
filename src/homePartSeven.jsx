import React from 'react';
import HomePartThreeComponent from './homePartThreeComponent';
import surajKund2 from "./images/surajKund2.png";
import surajKund3 from "./images/surajKund3.png";
import surajKund4 from "./images/surajKund4.png";

const HomePartSeven = () => {
  return (
    <div className="homePartThree">
        <div className="homePartSevenComponent"><img src={surajKund2} alt="imagebox"/></div>
        <div className="homePartSevenComponent"><img src={surajKund3} alt="imagebox"/></div>
        <div className="homePartSevenComponent"><img src={surajKund4} alt="imagebox"/></div>
       </div>
  );
};

export default HomePartSeven;