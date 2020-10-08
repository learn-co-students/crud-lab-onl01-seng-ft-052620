import cuid from "cuid";
import { combineReducers } from "redux";

const manageRestaurants = combineReducers({
  restaurants: resReducer,
  reviews: reviewsReducer,
});

function resReducer(state = [], action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const restaurant = {
        text: action.text,
        id: cuid(),
      };
      return [...state, restaurant];
      break;
    case "DELETE_RESTAURANT":
      const restaurants = state.filter((res) => res.id !== action.id);
      return restaurants;
      break;

    default:
      return state;
      break;
  }
}

function reviewsReducer(state = [], action) {
  switch (action.type) {
    case "ADD_REVIEW":
      const review = {
        ...action.review,
        id: cuid(),
      };
      return [...state, review];
      break;
    case "DELETE_REVIEW":
      const reviews = state.filter((res) => res.id !== action.id);
      return reviews;
      break;

    default:
      return state;
      break;
  }
}

export default manageRestaurants;
