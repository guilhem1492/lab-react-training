import React from 'react';
import './CreditCard.css';
import visaImg from '../../assets/images/visa.png';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const cardImg = type === 'Visa' ? visaImg : '/master-card.svg';

  return (
    <div
      className="creditCard"
      style={{
        backgroundColor: `${bgColor}`,
        color: `${color}`,
      }}
    >
      <img className="credit-card-img" src={cardImg} alt="Credit Card" />
      <p>{number.slice(12, 16)}</p>
      <p>
        {expirationMonth}/{expirationYear} {bank}
      </p>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;
