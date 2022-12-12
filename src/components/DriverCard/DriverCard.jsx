import React from 'react';
import Rating from '../Rating/Rating';
import './DriverCard.css';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="driver-card">
      <img src={img} alt="portrait" />
      <div className="name-rating-car">
        <p>{name}</p>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
