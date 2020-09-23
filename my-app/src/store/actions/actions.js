import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const FETCH_INVENTORY = "FETCH_INVENTORY";
export const ADD_ITEM = "ADD_ITEM";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const EDIT_NAME = "EDIT_NAME";
export const EDIT_DESCRIPTION = "EDIT_DESCRIPTION";
export const DELETE_ITEM = "DELETE_ITEM";
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";

//Get Entire Inventory List
export const fetchInventory = (userId) => {
  return (dispatch) => {
    axiosWithAuth()
      .get(`api/items/user/${userId}`)
      .then((response) => {
        dispatch({ type: FETCH_INVENTORY, payload: response.data });
      });
  };
};

//Add Item Action
//Erica to insert code here
export const addItem = (newProduct, userId) => {
  return (dispatch) => {
    axiosWithAuth()
      .post(`api/items/user/${userId}`, newProduct)
      .then((response) => {
        dispatch({ type: ADD_ITEM, payload: response.data });
      });
  };
};

//Get Item Categories
//Mary to insert code here
export const fetchItemCategories = () => {
  return (dispatch) => {
    axiosWithAuth()
      .get("/api/categories")
      .then((response) => {
        dispatch({ type: FETCH_CATEGORIES, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//Add Item Category Action
//Mary to insert code here
export const addItemCategory = (newCategory) => {
  return (dispatch) => {
    axiosWithAuth()
      .post(`api/categories`, newCategory)
      .then((response) => {
        dispatch({ type: ADD_CATEGORY, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//Update Name Action
//Erica to insert code here
export const editName = (product, productId) => {
  return (dispatch) => {
    axiosWithAuth()
      .put(`api/items/${productId}`, product)
      .then((response) => {
        dispatch({ type: EDIT_NAME, payload: response.data });
      });
  };
};

//Update Description Action
//Mary to insert code here
export const editItemDescription = (product, productId) => {
  return (dispatch) => {
    dispatch({ type: EDIT_DESCRIPTION });
    axiosWithAuth()
      .put(`/api/items${productId}`, product)
      .then((response) => {
        dispatch({ type: EDIT_DESCRIPTION, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//Delete Item Action
//Mary & Erica to pair program
export const deleteItem = () => {
  return (dispatch) => {
    dispatch({ type: DELETE_ITEM });
    // axiosWithAuth()
    // .delete(`/api/items${id}`)
    //    .then(response => {
    //      console.log(response)
    //    })
    //    .catch(err => {
    //      console.log(err)
    //    });
  };
};
