import React, { Component } from "react";
import Reviews from "./Reviews";
import cuid from "cuid";

class ReviewInput extends Component {
  state = {
    id: this.props.cuid,
    restaurantId: this.props.restaurantId,
    text: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addReview(this.state);
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Review</label>
          <input
            onChange={this.handleChange}
            name="text"
            type="text"
            value={this.state.text}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ReviewInput;
