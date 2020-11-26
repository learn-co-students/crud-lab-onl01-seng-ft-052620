import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import {connect} from 'react-redux'
class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurant={this.props.restaurant} restaurantId={this.props.id}/>
        <Reviews reviews={this.props.reviews.filter((review)=> review.restaurantId === this.props.id)} delete={this.props.deleteReview}/>
      </div>
    )
  }
}
const mapStateToProps = ({reviews}) => ({reviews})
const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({type: "ADD_REVIEW", review}),
  deleteReview: id => dispatch({type: "DELETE_REVIEW", id})
})
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
