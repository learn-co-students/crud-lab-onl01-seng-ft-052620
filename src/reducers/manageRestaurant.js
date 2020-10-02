import cuid from 'cuid';

export default function manageRestaurants(state={
    restaurants: [],
    reviews: []
}, action) {
   let  obj;
    switch (action.type) {
        case "ADD_RESTAURANT":
          obj = { id:cuid(), text: action.text}
          return {
            ...state,
            restaurants: [...state.restaurants, obj]
          };
          case "REMOVE_RESTAURANT":
            obj = state.restaurants.findIndex(book => book.id === action.id);
            return {
              ...state,
              restaurants: [...state.restaurants.slice(0, obj), ...state.restaurants.slice(obj + 1)]
            };
          case "ADD_REVIEW": 
   
          const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuid() };
          return {
            ...state,
            reviews: [...state.reviews, review ]
          }; 
          case 'REMOVE_REVIEW':
            const reviews = state.reviews.filter(review => review.id !== action.id);
            return {...state, reviews }

          default:
            return state;
        }
}
