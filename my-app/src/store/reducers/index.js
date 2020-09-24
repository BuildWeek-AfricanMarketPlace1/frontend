import {
  EDIT_NAME,
  EDIT_DESCRIPTION,
  DELETE_ITEM,
  FETCH_CATEGORIES,
  ADD_CATEGORY,
  FETCH_INVENTORY,
  ADD_ITEM,
} from "../actions";

const initialState = {
  categories: [],
  inventory: [
    {
      user_id: 0,
      location_id: 1,
      category_id: 1,
      name: "",
      description: "",
      price: 0.0,
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case EDIT_DESCRIPTION:
      return {
        ...state,
        description: action.payload,
      };
    case DELETE_ITEM:
      return {};
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
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    default:
      return state;
  }
}
