import axiosWithAuth from "../../utils/axiosWithAuth";

// ACTION TYPES
export const FETCH_INVENTORY = "FETCH_INVENTORY";
export const UPDATE_LOCATION = "UPDATE_LOCATION";
export const ADD_LOCATION = "ADD_LOCATION";
export const DELETE_LOCATION = "DELETE_LOCATION";

// ACTION CREATORS
export const fetchInventory = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_INVENTORY});
    // axios
    //   .get("")
    //   .then((response) => {
    //     dispatch({ type: FETCH_INVENTORY, payload: response.data.data });
    //   })
    //   .catch((error) => {
    //     dispatch({
    //       type: FETCH_INVENTORY,
    //       payload: { message: "Unable to load products." }
    //     });
    //   });
  };
};

export const updateLocation = () => {
  return (dispatch) => {
    dispatch({ type: UPDATE_LOCATION})
  }
}