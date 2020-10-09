import React, { Component } from 'react';
import Review from './Review';

const Reviews = props => {
  const associatedReviews = props.reviews.filter(review => review.restaurantId === props.restaurantId);

  const review = associatedReviews.map(review => <Review key={review.id} {...review} deleteReview={props.deleteReview}/>)

  return (
    <ul>
      { review }
    </ul>
  );

}

export default Reviews;