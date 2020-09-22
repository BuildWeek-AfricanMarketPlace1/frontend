//Edit Location Actions

//Edit Category Actions
export const addCategory = () => {
  return (dispatch) => {
    dispatch({ type: ADD_CATEGORY });
  };
};

export const editCategory = () => {
  return (dispatch) => {
    dispatch({ type: EDIT_CATEGORY });
  };
};

export const deleteCategory = () => {
  return (dispatch) => {
    dispatch({ type: DELETE_CATEGORY });
  };
};
