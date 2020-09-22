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
  };
};

//Delete Item Action
//Mary & Erica to pair program
export const deleteItem = () => {
  return (dispatch) => {
    dispatch({ type: DELETE_ITEM });
  };
};
