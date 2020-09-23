import { DELETE_ITEM, FETCH_INVENTORY } from "../actions";
import { ADD_ITEM } from "../actions";

const initialState = {
  inventory: [],
};

export default function inventoryReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_INVENTORY:
      return {
        ...state,
        inventory: action.payload,
      };
    case ADD_ITEM:
      return {
        ...state,
        inventory: [...state.inventory, action.payload],
      };
    case DELETE_ITEM:
      return {
        ...state,
        inventory: [...state.inventory, action.payload],
      };
    default:
      return state;
  }
}
