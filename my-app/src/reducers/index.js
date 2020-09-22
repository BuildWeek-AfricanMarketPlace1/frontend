import { ADD_DESCRIPTION } from "../actions";
import { EDIT_DESCRIPTION } from "../actions";
import { DELETE_DESCRIPTION } from "../actions";

const initialState = {
  category: "",
  location: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DESCRIPTION:
      return {};
    case EDIT_DESCRIPTION:
      return {};
    case DELETE_DESCRIPTION:
      return {};
    default:
      return state;
  }
}
