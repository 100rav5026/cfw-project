import React from 'react';

const HomePartThreeComponent = (props) => {
  return (
    <div className="homePartThreeComponent">
        <h1>{props.number}</h1>
        <h2>{props.header}</h2>
        <p>{props.para}</p>
    </div>
  );
};

export default HomePartThreeComponent;