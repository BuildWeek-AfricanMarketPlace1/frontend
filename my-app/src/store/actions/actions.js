import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const ADD_ITEM = "ADD_ITEM";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const EDIT_NAME = "EDIT_NAME";
export const EDIT_DESCRIPTION = "EDIT_DESCRIPTION";
export const DELETE_ITEM = "DELETE_ITEM";

//Add Item Action
//Erica to insert code here
export const addItem = () => {
  return (dispatch) => {
    dispatch({ type: ADD_ITEM });
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
export const editName = () => {
  return (dispatch) => {
    dispatch({ type: EDIT_NAME });
  };
};

//Update Description Action
//Mary to insert code here
export const editDescription = () => {
  return (dispatch) => {
    dispatch({ type: EDIT_DESCRIPTION });
    axiosWithAuth()
      .put(`/api/items${id}`, updatedData)
      .then((res) => {
        console.log(res);
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
    // .delete(`https://african-market712.herokuapp.com/api/items${id}`)
    //    .then(response => {
    //      console.log(response)
    //    })
    //    .catch(err => {
    //      console.log(err)
    //    });
  };
};
