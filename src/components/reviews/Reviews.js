import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    debugger;
    const reviews = this.props.reviews.map((review) => <Review key={review.id} review={review} delete={this.props.delete}/>)
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;