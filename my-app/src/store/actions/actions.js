import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const ADD_ITEM = "ADD_ITEM";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const EDIT_NAME = "EDIT_NAME";
export const EDIT_DESCRIPTION = "EDIT_DESCRIPTION";
export const DELETE_ITEM = "DELETE_ITEM";
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";

//Add Item Action
//Erica to insert code here
export const addItem = () => {
  return (dispatch) => {
    dispatch({ type: ADD_ITEM });
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
export const editName = () => {
  return (dispatch) => {
    dispatch({ type: EDIT_NAME });
  };
};

//Update Description Action
//Mary to insert code here
export const editItemDescription = (product) => {
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
