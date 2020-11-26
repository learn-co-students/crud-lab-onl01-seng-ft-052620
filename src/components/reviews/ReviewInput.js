import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    restaurantId: this.props.restaurantId,
    // restaurantID: this.props.restaurant,
    text: ''
  }

  handleOnChange = (event) =>{
    this.setState({
      text: event.target.value
    })
  }
  handleOnSubmit = (event) => {
    event.preventDefault();

    console.log(this.state)
    debugger;
    this.props.addReview(this.state);
  }
  render() {
    return (
      <div>
        Review Input
        <form onSubmit={this.handleOnSubmit}>
          Review: <input onChange={this.handleOnChange} type="text" name ='text' id="text" value={this.state.text}/>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
