import {
    FETCH_INVENTORY,
} from "../actions";

const initialState = {
    inventory: [],
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_INVENTORY:
        return {
          ...state,
          loadingCards: true
        };
      default:
        return state;
    }
  };