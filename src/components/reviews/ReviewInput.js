import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: "",
    id: null
  }

  handleInputChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addReview({ ...this.state, restaurantId: this.props.restaurantId})
    this.setState({ text: "" })
  }

  render() {
    return (
      <div>
        <h4>Submit a Review: </h4>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="text" name="text" value={this.state.text} onChange={this.handleInputChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
