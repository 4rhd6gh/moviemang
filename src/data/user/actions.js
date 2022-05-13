import * as ActionTypes from "@data/rootActionTypes";
import * as apis from "@service/apis/movieMang/user";

export const login = (loginParam) => async (dispatch) => {
  try {
    //dispatch({ type: ActionTypes.LOADING_START });
    console.log("redux login");
    const response = await apis.login("POST", "/login", loginParam);
    console.log(response);
    dispatch({
      type: ActionTypes.LOGIN_SUCCESS,
      payload: { ...response, isLogined: true },
    });

    //await dispatch({ type: ActionTypes.LOADING_END });
  } catch (error) {
    //dispatch({ type: ActionTypes.LOADING_END, payload: error });
  }
};

export const signup = (newUserParam) => async (dispatch) => {
  try {
    //dispatch({ type: ActionTypes.LOADING_START });
    const response = await apis.login("POST", "/signup", newUserParam);
    dispatch({
      type: ActionTypes.SIGNUP_SUCCESS,
      payload: response,
    });

    //await dispatch({ type: ActionTypes.LOADING_END });
  } catch (error) {
    //dispatch({ type: ActionTypes.LOADING_END, payload: error });
  }
};
