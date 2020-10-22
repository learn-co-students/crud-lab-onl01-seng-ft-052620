import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    const restaurant = this.props.restaurant;
    const renderReviews = this.props.reviews.map((review, index) => {
      if (restaurant.id === review.restaurantId) {
        return (
          <Review
            id={index}
            review={review}
            deleteReview={this.props.deleteReview}
          />
        );
      }
    });
    return <ul>{renderReviews}</ul>;
  }
}

export default Reviews;
