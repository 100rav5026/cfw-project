import React from "react";
import makeup from "./images/makeupimg.jpg";

const HomePartFour = () => {
  return (
    <div className="homePartFour">
      <div className="left-section-four">
        <img src={makeup} alt="MakeupImage" />
      </div>
      <div className="right-section-four">
        <h2>MAKEUP ARTIST</h2>
        <h3>Crafting beauty brushstroke by brushstroke.</h3>
        <hr className="home-part-four-hr"/>
        <p>
            Unlock your artistic potential – join Cudwarm Fashion Week and showcase your makeup mastery on the grand canvas of high-fashion runways.
        </p>
      </div>
    </div>
  );
};

export default HomePartFour;
