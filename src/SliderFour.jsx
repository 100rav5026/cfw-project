import React from "react";
import slider1 from "./images/slider-1.jpg";
import slider2 from "./images/slider-2.jpg";
import the from "./images/the-img.jpg";

const SliderFour = () => {

    return (
        <div>
            <div className="row-slider-four" >
                <div class="column-slider-four">
                    <img className="the-img" src={the} alt="the-img"/>
                    <h1>FASHION MODEL</h1>
                    <span>A collection of elegant styles.</span>
                    <p className="slider-four-para">Elevate the runway experience with a fusion of trendsetting style and effortless sophistication – a fashion week like no other</p>
                </div>

                <div class="column-slider-four">
                    <img src={slider1} className="background-image-six image-slider-4" alt="imagebox" />

                </div>
                <div class="column-slider-four">
                    <img src={slider2} className="background-image-six" alt="imagebox" />

                </div>

            </div>

        </div>
    );
};

export default SliderFour;