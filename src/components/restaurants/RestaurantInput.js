import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ""
  }
  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }
  handleOnSubmit = (event) => {
    event.preventDefault();
    // debugger;
    // console.log(this)
    this.props.addRestaurant(this.state.text)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          Restaurant Name: <input onChange={this.handleOnChange} type="text" value={this.state.text}/>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
