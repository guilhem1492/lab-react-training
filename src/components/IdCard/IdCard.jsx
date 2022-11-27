import React from 'react';
//import './App.css';
import './IdCard.css';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="IdCard">
      <img src={picture} alt="portrait" />

      <ul>
        <li>
          <span className="bold">First name</span>: {firstName}
        </li>
        <li>
          <span className="bold">Last name</span>: {lastName}
        </li>
        <li>
          <span className="bold">Gender</span>: {gender}
        </li>
        <li>
          <span className="bold">Height</span>: {height}
        </li>
        <li>
          <span className="bold">Birth</span>:{' '}
          {new Intl.DateTimeFormat('fr').format(birth)}
        </li>
      </ul>
    </div>
  );
};

export default IdCard;
