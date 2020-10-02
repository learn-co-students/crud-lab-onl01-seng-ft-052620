import { combineReducers } from 'redux'
import restaurantReducer from './restaurantReducer'
import reviewReducer from './reviewReducer'
import cuid from 'cuid';

const manageRestaurant = combineReducers({
  restaurants: restaurantReducer,
  reviews: reviewReducer
})

export default manageRestaurant