import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    // let review;

    const review = this.props.reviews.map(rev => <Review key={rev.id} review={rev} />)
    // const rev = this.props.reviews.map(rev => rev.id)
    // if(rev === this.props.restaurantId){
    //   return review = this.props.reviews.map(rev => <Review key={rev.id} review={rev}/>)
    // }

    return (
      <ul>
       {review}
      </ul>
    );
  }
};

export default Reviews;