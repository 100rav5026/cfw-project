// NavigationOptions.js
import React from 'react';
import { Link, Router } from "react-router-dom";
import termsConditions from "./termsConditions.jsx";
import { Route, Routes } from "react-router-dom";
import NavbarMenu from './NavbarMenu.js';

const NavigationOptions = () => {
  return (
    <div className="navigation-options">
      <ul>
  <NavbarMenu/>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/TermsConditions">Policies</Link></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/blog">Blog</a></li>
        <li>
            <span>&#9776;</span>
        </li>
      </ul>
    </div>
  );
};

export default NavigationOptions;
