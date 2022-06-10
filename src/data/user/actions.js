import * as ActionTypes from "@data/rootActionTypes";
import * as apis from "@service/apis/movieMang";
import * as actions from "@data/rootActions";

export const login = (loginParam) => async (dispatch) => {
  try {
    dispatch(actions.common.startLoading);
    const response = await apis.requestAxios("post", "/login", {}, loginParam);

    if (response.status === 200) {
      dispatch(actions.common.endLoading);
      await dispatch({
        type: ActionTypes.LOGIN_SUCCESS,
        payload: response.data,
      });
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
    } else {
      dispatch(actions.common.endLoading);
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
