import React from "react";
import surajKund1 from "./images/surajKund1.jpg";

const HomePartSix = () => {

    return (
        <div>
            <div className="image-container-six" >
                <img src={surajKund1} className="background-image-six" alt="imagebox" />
                <div className="image-overlay-1">
                    <h1 className="partSix-h">CFW <span className="bigger-text">X</span> SURAJKAND</h1>
                    <h2 className="partSix-h">Coming Soon</h2>
                    <p className="partSix-h">Come visit us at Surajkund to unlock Exclusive Experiences!</p>
                    <p className="partSix-h">Stall no: 0033 Food Court</p>
                </div>

            </div>

        </div>
    );
};

export default HomePartSix;