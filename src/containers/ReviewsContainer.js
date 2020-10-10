import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux'

class ReviewsContainer extends Component {
  state = {
    text: "",
    restaurantId: ""
    id: ''
  }

  render() {
    return (
      <div>
        <ReviewInput />
        <Reviews />
      </div>
    )
  }
}
// const mapStateToProps = state => {
//   return {
//     xxx: state.xxx
//   }
// }

// const mapDispatchToProps = Dispatch => {
//   return {
//     xxx: x => dispatch({t})
//   }
// }
export default connect()(ReviewsContainer)
