import React from 'react';
import ReviewCard from './ReviewCard';
import profile from "./profile.webp"
import "./ReviewCard.css"

const reviewsData = [
  {
    image: profile,
    name: 'John Doe',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: profile,
    name: 'Jane Smith',
    message: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: profile,
    name: 'Jane Smith',
    message: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: profile,
    name: 'Jane Smith',
    message: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: profile,
    name: 'Jane Smith',
    message: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const ReviewPage = () => {
  return (
    <div className="review-page">
      <h1>Customer Reviews</h1>
      <div className="review-cards">
        {reviewsData.map((review, index) => (
          <ReviewCard
            key={index}
            image={review.image}
            name={review.name}
            message={review.message}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
