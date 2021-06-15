import cuid from "cuid";

export default function manageRestaurants(
  state = { restaurants: [], reviews: [] },
  action
) {
  console.log(state.reviews.length);
  switch (action.type) {
    case "ADD_RESTAURANT":
      return {
        ...state,
        restaurants: [
          ...state.restaurants,
          {
            id: cuid(),
            text: action.text,
          },
        ],
      };
    case "DELETE_RESTAURANT":
      return {
        ...state,
        restaurants: state.restaurants.filter((rest) => rest.id !== action.id),
      };
    case "ADD_REVIEW":
      return { ...state, reviews: [...state.reviews, action.review] };
    case "DELETE_REVIEW":
      return {
        ...state,
        reviews: state.reviews.filter((review) => review.id !== action.id),
      };
    default:
      return state;
  }
}
