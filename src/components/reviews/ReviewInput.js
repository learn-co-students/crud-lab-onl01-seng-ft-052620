import React, { Component } from 'react';
import Reviews from './Reviews';
import Restaurant from '../restaurants/Restaurant';

class ReviewInput extends Component {
  state = {
    text: ""
  }
  handleChange = event => {
  this.setState({
    text: event.target.value
  })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
  }
  render() {
    console.log(this.props.restaurantId)

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
