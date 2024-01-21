// NavigationOptions.js
import React from 'react';

const NavigationOptions = () => {
  return (
    <div className="navigation-options">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/pages">Pages</a></li>
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
