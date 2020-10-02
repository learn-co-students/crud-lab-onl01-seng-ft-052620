import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  genReviews = () => {
    return this.props.reviews.map( review => <Review key={review.id} review={review} delete={this.props.delete} />)
  }

  render() {
    return (
      <ul>
        {this.genReviews()}
      </ul>
    );
  }
};

export default Reviews;