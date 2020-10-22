import React, { Component } from "react";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";
import { connect } from "react-redux";
import cuid from "cuid";

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewInput
          cuid={cuid()}
          restaurant={this.props.restaurant}
          restaurantId={this.props.restaurant.id}
          addReview={this.props.addReview}
        />
        <Reviews
          restaurant={this.props.restaurant}
          reviews={this.props.reviews}
          deleteReview={this.props.deleteReview}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addReview: (review) =>
      dispatch({
        type: "ADD_REVIEW",
        review: {
          id: cuid(),
          text: review.text,
          restaurantId: review.restaurantId,
        },
      }),
    deleteReview: (id) =>
      dispatch({
        type: "DELETE_REVIEW",
        id,
      }),
  };
};

const mapStateToProps = (state) => {
  return { reviews: state.reviews };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
