import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state)
    this.setState({
      text: ''
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Restaurant</label>
          <input onChange={this.handleChange} name='text' type="text" value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};


export default RestaurantInput;
