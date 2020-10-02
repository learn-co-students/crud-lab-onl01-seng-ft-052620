import React, { Component } from 'react';
import Restaurant from './Restaurant'

const Restaurants = props => {

  const restaurant = props.restaurants.map(restaurant => <Restaurant key={restaurant.id}  {...restaurant} deleteRestaurant={props.deleteRestaurant}/>)

  return (
 <ul>
    {restaurant}
 </ul>
  );

};

export default Restaurants;


//deleteBand={props.deleteBand}