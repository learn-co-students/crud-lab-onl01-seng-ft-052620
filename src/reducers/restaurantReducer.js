import cuid from 'cuid';

export default function manageRestaurants(state = [], action) {
  switch(action.type){
    case "ADD_RESTAURANT":
      const newRestaurant = {
        ...action.restaurant,
        id: cuid()
      }
      return [...state, newRestaurant]
    case "DELETE_RESTAURANT":
      return state.filter(restaurant => restaurant.id !== action.id)
    default:
      return state
  }
}
