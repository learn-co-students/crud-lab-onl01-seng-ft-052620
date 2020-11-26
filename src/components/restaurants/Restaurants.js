import React, { Component } from 'react';
import Restaurant from './Restaurant';
class Restaurants extends Component {
  render() {
    // debugger;
    // const restaurants = this.props.restaurants.map((restaurant) => <Restaurant key={restaurant.id} restaurant={restaurant}/>)
    return(
      <ul>
        {/* {restaurants} */}
    {this.props.restaurants.map((restaurant) => <Restaurant key={restaurant.id} restaurant={restaurant} delete={this.props.delete}/>)}

      </ul>
    );
  }
};

export default Restaurants;