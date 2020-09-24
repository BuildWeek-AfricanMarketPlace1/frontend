import { FETCH_CATEGORIES } from "../actions";
import { ADD_CATEGORY } from "../actions";

const initialState = {
  inventory: [
    {
      id: 0,
      user_id: 0,
      locname: "",
      catname: "",
      name: "",
      description: "",
      price: 0.0,
    },
  ],
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
