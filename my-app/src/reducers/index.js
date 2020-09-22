import { ADD_CATEGORY } from "../actions";
import { EDIT_CATEGORY } from "../actions";
import { DELETE_CATEGORY } from "../actions";

const initialState = {
  category: "",
  location: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CATEGORY:
      return {};
    case EDIT_CATEGORY:
      return {};
    case DELETE_CATEGORY:
      return {};
    default:
      return state;
  }
}
