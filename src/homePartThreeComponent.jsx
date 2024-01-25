import React from 'react';

const HomePartThreeComponent = (props) => {
  return (
    <div className="homePartThreeComponent">
        <img src={props.number} alt='number'/>
        <h2>{props.header}</h2>
        <p>{props.para}</p>
    </div>
  );
};

export default HomePartThreeComponent;