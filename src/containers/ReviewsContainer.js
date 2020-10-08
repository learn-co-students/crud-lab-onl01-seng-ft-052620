import React, { Component } from "react";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";
import { connect } from "react-redux";

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <h3>Reviews:</h3>
        <ReviewInput
          addReview={(text, restaurantId) =>
            this.props.dispatch({
              type: "ADD_REVIEW",
              review: { text, restaurantId },
            })
          }
          restaurantId={this.props.restaurant.id}
        />
        <Reviews
          reviews={this.props.reviews.filter(
            (review) => review.restaurantId === this.props.restaurant.id
          )}
          deleteReview={(id) =>
            this.props.dispatch({ type: "DELETE_REVIEW", id })
          }
        />
      </div>
    );
  }
}

const mapStateToProps = ({ reviews }) => ({ reviews });

export default connect(mapStateToProps)(ReviewsContainer);
