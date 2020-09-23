import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const FETCH_INVENTORY = "FETCH_INVENTORY";
export const ADD_ITEM = "ADD_ITEM";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const EDIT_NAME = "EDIT_NAME";
export const EDIT_DESCRIPTION = "EDIT_DESCRIPTION";
export const DELETE_ITEM = "DELETE_ITEM";

//Get Entire Inventory List
export const fetchInventory = (userId) => {
  return (dispatch) => {
    axiosWithAuth()
    .get(`api/items/user/${userId}`)
    .then((response) => {
      dispatch({ type: FETCH_INVENTORY, payload: response.data});
    })
  }
}

//Add Item Action
//Erica to insert code here
export const addItem = (newProduct, userId) => {
  return (dispatch) => {
    axiosWithAuth()
    .post(`api/items/user/${userId}`, newProduct)
    .then((response) => {
      dispatch({ type: ADD_ITEM, payload: response.data})
    })
  };
};

//Add Item Category Action
//Mary to insert code here
export const addCategory = () => {
  return (dispatch) => {
    dispatch({ type: ADD_CATEGORY });
  };
};

//Update Name Action
//Erica to insert code here
export const editName = (product, productId) => {
  return (dispatch) => {
    axiosWithAuth()
    .put(`api/items/${productId}`, product)
    .then((response) => {
      dispatch({ type: EDIT_NAME, payload: response.data});
    })
  };
};

//Update Description Action
//Mary to insert code here
export const editDescription = () => {
  return (dispatch) => {
    dispatch({ type: EDIT_DESCRIPTION });
  };
};

//Delete Item Action
//Mary & Erica to pair program
export const deleteItem = () => {
  return (dispatch) => {
    dispatch({ type: DELETE_ITEM });
  };
};
