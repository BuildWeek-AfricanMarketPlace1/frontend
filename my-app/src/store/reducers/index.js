import { ADD_ITEM } from "../actions";
import { ADD_CATEGORY } from "../actions";
import { EDIT_NAME } from "../actions";
import { EDIT_DESCRIPTION } from "../actions";
import { DELETE_ITEM } from "../actions";

const initialState = {
  id: 0,
  user_id: 0,
  locname: "",
  catname: "",
  name: "",
  description: "",
  price: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {};
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case EDIT_NAME:
      return {};
    case EDIT_DESCRIPTION:
      return {
        ...state,
        description: [...state.description, action.payload],
      };
    case DELETE_ITEM:
      return {};
    default:
      return state;
  }
}
