import React from "react";
import Navbar from "./navbar";
import SliderOneImage from "./SliderOneImage";
import SliderOneContent from "./SliderOneContent";
import HomePartThree from "./homePartThree";
import HomePartFour from "./homePartFour";
import Home from "./Home";
import TermsConditions from "./termsConditions";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivacyPolicy from "./privacyPolicy";
import RefundReturn from "./refundReturnPolicy";
import ShippingPolicy from "./ShippingPolicy";

function App() {
    return ( <
        div className = "App" >
        <
        Router basename = "/" >
        <
        Navbar / >
        <
        Routes >
        <
        Route exact path = "/"
        element = { < Home / > }
        /> <
        Route path = "/About" / >
        <
        Route path = "/TermsConditions"
        element = { < TermsConditions / > }
        /> <
        Route path = "/RefundReturnPolicy"
        element = { < RefundReturn / > }
        /> <
        Route path = "/ShippingPolicy"
        element = { < ShippingPolicy / > }
        /> <
        Route path = "/PrivacyPolicy"
        element = { < PrivacyPolicy / > }
        /> <
        Route path = "/Contact"
        element = { < TermsConditions / > }
        /> <
        /Routes> <
        /Router> <
        HomePartFour / >
        <
        /div>
    );
}

export default App;