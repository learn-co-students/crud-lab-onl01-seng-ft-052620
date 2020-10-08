import React, { Component } from "react";

class Review extends Component {
  // handleClick = () => {
  //   this.props.deleteReview(this.props.review.id);
  // };

  render() {
    const review = this.props.review;

    return (
      <div>
        <li>{review.text}</li>
        <button onClick={(e) => this.props.deleteReview(this.props.review.id)}>
          {" "}
          X{" "}
        </button>
      </div>
    );
  }
}

export default Review;
