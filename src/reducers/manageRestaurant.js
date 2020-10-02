import cuid from 'cuid';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  restaurants: manageRestaurants,
  reviews: manageReviews
})

function manageRestaurants(state=[], action) {

  switch(action.type) {
    case ("ADD_RESTAURANT"):
      const restaurant = {
        text: action.payload,
        id: cuid()
      }
      return [...state,restaurant]

    case ("DELETE_RESTAURANT"):
      return state.filter(r => r.id !== action.payload)

    default:
      return state
  }

}

function manageReviews(state=[],action){
  switch(action.type){
    case ("ADD_REVIEW"):
      const review = {
        id: cuid(),
        ...action.review
      }
      return [...state,review]
    
      case ("DELETE_REVIEW"):
        return state.filter(r => r.id !== action.payload)

    default:
      return state
  }
}

export default rootReducer