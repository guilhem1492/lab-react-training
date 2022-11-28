import React from 'react';
import './Random.css';

const Random = (props) => {
  let min = props.min;
  let max = props.max;
  let randomNum = Math.floor(Math.random() * (max - min)) + min;

  return (
    <div className="random">
      <p>
        Random value between {min} and {max} = {randomNum}
      </p>
    </div>
  );
};

export default Random;
