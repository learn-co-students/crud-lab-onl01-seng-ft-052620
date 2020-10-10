import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
  let restaurants =[]
if(this.props.restaurants && this.props.restaurants.map) {
  restaurants = this.props.restaurants.map(rest => { return ( <Restaurant key={rest.id} restaurant={rest} />) })
}

   return(
      <ul>
       {restaurants}
      </ul>
    );
  }
};

export default Restaurants;