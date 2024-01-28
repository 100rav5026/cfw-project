import React from "react";
// import leftboxtop from "./images/leftboxtop.jpg";
// import rightboxtop from "./images/leftboxbottom.jpg";
// import righttopleft from "./images/righttopleft.jpg";
// import righttopright from "./images/righttopright.jpg";
// import rightmiddle from "./images/rightmiddle.jpg";
// import rightbottomleft from "./images/rightbottomleft.jpg";
// import rightbottomright from "./images/rightbottomright.jpg";
import imageboxfive from "./images/imageboxfive.png";

const HomePartFive = () => {
  return (
    <div className="home-part-five">
        <h1>THE CATALOG OF CFW</h1>
        <p>Where Style Meets Innovation In The Designer Spotlight.</p>
        <hr/>
        <img src={imageboxfive} className="image-box-five" alt="imagebox"/>
        {/* <div className="home-part-five-images-box">
            <div className="home-part-five-images-left-box">
                <img src={leftboxtop} alt="image"/>
                <img src={rightboxtop} alt="image"/>
            </div>
            <div className="home-part-five-images-right-box">
                <div className="home-part-five-images-right-box-top">
                    <img src={righttopleft} alt="image"/>
                    <img src={righttopright} alt="image"/>
                </div>
                <div className="home-part-five-images-right-box-middle">
                    <img src={rightmiddle} alt="image"/>
                </div>
                <div className="home-part-five-images-right-box-bottom">
                    <img src={rightbottomleft} alt="image"/>
                    <img src={rightbottomright} alt="image"/>
                </div>
            </div>
        </div> */}
    </div>
  );
};

export default HomePartFive;