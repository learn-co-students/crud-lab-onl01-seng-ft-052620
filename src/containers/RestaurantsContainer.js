import React, { Component } from "react";
import RestaurantInput from "../components/restaurants/RestaurantInput";
import Restaurants from "../components/restaurants/Restaurants";
import { connect } from "react-redux";

class RestaurantsContainer extends Component {
  render() {
    return (
      <div>
        <h1>Restaurants:</h1>
        <RestaurantInput
          addRestaurant={(text) =>
            this.props.dispatch({ type: "ADD_RESTAURANT", text })
          }
        />
        <Restaurants
          restaurants={this.props.restaurants}
          deleteRes={(id) =>
            this.props.dispatch({ type: "DELETE_RESTAURANT", id })
          }
        />
      </div>
    );
  }
}

const mapStateToProps = ({ restaurants }) => ({ restaurants });

export default connect(mapStateToProps)(RestaurantsContainer);
