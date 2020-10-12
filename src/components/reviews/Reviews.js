import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

  
    const rev = this.props.reviews.filter(rev => rev.restaurantId === this.props.restaurantId)
    const review = rev.map((review, index) => {
      return <Review key={index} review={review} delete={this.props.delete}/>
    })


    return (
      <ul>
       {review}
      </ul>
    );
  }
};

export default Reviews;


