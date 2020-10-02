import cuid from 'cuid';

export default function reviewReducer (state = [], action) {
  switch(action.type){
    case "ADD_REVIEW":
      const newReview = {
        ...action.review,
        id: cuid(),
        restaurantId: action.review.restaurantId
      }
      return [...state, newReview]
    case "DELETE_REVIEW":
      return state.filter(review => review.id !== action.id)
    default:
      return state
  }
}
