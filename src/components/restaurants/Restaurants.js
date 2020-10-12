import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
  // let restaurants;
// if(this.props.restaurants && this.props.restaurants.map) {
  const restaurants = this.props.restaurants.map(rest => { return ( <Restaurant key={rest.id} restaurant={rest} delete={this.props.delete}/>) })
// }

   return(
      <ul>
       {restaurants}
      </ul>
    );
  }
};

export default Restaurants;