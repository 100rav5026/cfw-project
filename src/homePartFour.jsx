import React from "react";
import makeup from "./images/makeupimg.jpg";

const HomePartFour = () => {
  return (
    <div className="homePartFour">
      <div className="left-section-four">
        <img src={makeup} alt="MakeupImage" />
      </div>
      <div className="right-section-four">
        <h2>INDIA'S LARGEST FASHION WEEK</h2>
        <h3>Runway Radiance: A week of Fashion Finesse.</h3>
        <hr className="home-part-four-hr"/>
        <p>
            Strutting through the runway of life with the style and grace. Embracing the runway lights at Fashion Week. Fashion enthusisast, trendsetter and a touch of  glam.
        </p>
      </div>
    </div>
  );
};

export default HomePartFour;
