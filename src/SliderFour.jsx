import React from "react";
import slider1 from "./images/slider-1.jpg";
import slider2 from "./images/slider-2.jpg";

const SliderFour = () => {

    return (
        <div>
            <div className="row-slider-four" >
                <div class="column-slider-four">
                    <h1>The FASHION MODEL</h1>
                    <p className="slider-four-para">A collection of elegant styles
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis mauris nulla ut sapien dictum</p>
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