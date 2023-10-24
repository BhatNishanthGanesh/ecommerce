import React from 'react';
import "./ReviewCard.css"

const ReviewCard = ({ image, name, message }) => {
  return (
    <div className="review-card ">
      <img src={image} alt={name} className="review-image" />
      <h2 className="review-name">{name}</h2>
      <p className="review-message">{message}</p>
    </div>
  );
};

export default ReviewCard;
