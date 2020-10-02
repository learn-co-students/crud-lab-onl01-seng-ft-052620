import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  genRestaurants = () => {
    return this.props.restaurants.map( rest => <Restaurant key={rest.id} restaurant={rest} delete={this.props.delete} />)
  }

  render() {
    return(
      <ul>
        { this.genRestaurants() }
      </ul>
    );
  }
};

export default Restaurants;