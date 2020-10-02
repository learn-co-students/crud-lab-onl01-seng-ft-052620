import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ""
  }

  handleInputChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addRestaurant({ ...this.state })
    this.setState({ text: "" })
  }

  render() {
    return (
      <div>
        <h2>Create New Restaurant: </h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="text" name="text" value={this.state.text} onChange={this.handleInputChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
