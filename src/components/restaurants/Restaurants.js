import React, { Component } from "react";
import Restaurant from "./Restaurant";

class Restaurants extends Component {
  renderRestaurants = () => {
    return this.props.restaurants.map((restaurant) => (
      <Restaurant
        restaurant={restaurant}
        deleteRes={this.props.deleteRes}
        key={restaurant.id}
      />
    ));
  };

  render() {
    return <ul>{this.renderRestaurants()}</ul>;
  }
}

export default Restaurants;
