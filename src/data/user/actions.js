import * as ActionTypes from "@data/rootActionTypes";
import * as apis from "@service/apis/movieMang";

export const login = (loginParam) => async (dispatch) => {
  try {
    //dispatch({ type: ActionTypes.LOADING_START });
    console.log("redux login");

    const response = await apis.requestAxios("post", "/login", {}, loginParam);

    if (response.status === 200) {
      dispatch({
        type: ActionTypes.LOGIN_SUCCESS,
        payload: response.data,
      });
    } else {
      console.log(response);
      dispatch({
        type: ActionTypes.LOGIN_FAILURE,
        payload: response.message,
      });
    }

    //await dispatch({ type: ActionTypes.LOADING_END });
  } catch (error) {
    //dispatch({ type: ActionTypes.LOADING_END, payload: error });
  }
};

export const confirmError = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.LOGIN_FAILURE_CLEAR,
  });
};

export const signup = (newUserParam) => async (dispatch) => {};
