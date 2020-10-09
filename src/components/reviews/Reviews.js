import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {

    const associatedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);    
    const restaurantReviews = associatedReviews.map((review) => <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />)

    return (
      <div>
        <ul>
          {restaurantReviews}
        </ul>
      </div>
    );
  }

};

export default Reviews;