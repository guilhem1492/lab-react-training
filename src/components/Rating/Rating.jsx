import React from 'react';
import './Rating.css';

const Rating = ({ children }) => {
  let num = Math.round(children);
  let stars = '';

  switch (num) {
    case 0:
      stars = '☆☆☆☆☆';
      break;
    case 1:
      stars = '★☆☆☆☆';
      break;
    case 2:
      stars = '★★☆☆☆';
      break;
    case 3:
      stars = '★★★☆☆';
      break;
    case 4:
      stars = '★★★★☆';
      break;
    case 5:
      stars = '★★★★★';
      break;
  }

  return (
    <div>
      <p className="stars-rating">{stars}</p>
    </div>
  );
};

export default Rating;
