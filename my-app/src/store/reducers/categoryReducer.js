import { FETCH_CATEGORIES } from "../actions";
import { ADD_CATEGORY } from "../actions";

const initialState = {
  category: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        category: action.payload,
      };
    case ADD_CATEGORY:
      return {
        ...state,
        category: [...state.category, action.payload],
      };
    default:
      return state;
  }
}
