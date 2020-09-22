//Edit Name Actions
//Erica to import her action code here

//Edit Description Actions
export const addDescription = () => {
  return (dispatch) => {
    dispatch({ type: ADD_DESCRIPTION });
  };
};

export const editDescription = () => {
  return (dispatch) => {
    dispatch({ type: EDIT_DESCRIPTION });
  };
};

export const deleteDescription = () => {
  return (dispatch) => {
    dispatch({ type: DELETE_DESCRIPTION });
  };
};
