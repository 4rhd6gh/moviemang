import * as ActionTypes from "@data/rootActionTypes";
import * as apis from "@service/apis/movieMang";
import * as actions from "@data/rootActions";

export const snsLogin = (loginParams, navigate) => async (dispatch) => {
  try {
    dispatch(actions.common.startLoading);

    const response = await apis.requestAxios(
      "post",
      "/auth/login",
      {},
      loginParams
    );

    if (response.status === 200) {
      dispatch(actions.common.endLoading);

      console.log(response.data);

      await dispatch({
        type: ActionTypes.LOGIN_SUCCESS,
        payload: response.data,
      });

      if (response.data.message === "로그인 성공") {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("refreshToken", response.data.refreshToken);
      }
    } else {
      dispatch(actions.common.endLoading);
      dispatch({
        type: ActionTypes.LOGIN_FAILURE,
        payload: response.message,
      });
    }

    return response.data;

    //await dispatch({ type: ActionTypes.LOADING_END });
  } catch (error) {
    //dispatch({ type: ActionTypes.LOADING_END, payload: error });
  }
};

export const createNickName = (createNickNameParams) => async (dispatch) => {
  console.log("요청 시작");
  try {
    dispatch(actions.common.startLoading);

    const response = await apis.requestAxios(
      "post",
      "/auth/user",
      {},
      createNickNameParams
    );
    //----- 코드가 멈춰있음

    console.log(response);

    if (response.status === 200) {
      dispatch(actions.common.endLoading);

      await dispatch({
        type: ActionTypes.LOGIN_SUCCESS,
        payload: response.data,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("refreshToken", response.data.refreshToken);
    } else {
      dispatch(actions.common.endLoading);
      dispatch({
        type: ActionTypes.LOGIN_FAILURE,
        payload: response.message,
      });
    }
  } catch (err) {}
};

export const confirmError = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.LOGIN_FAILURE_CLEAR,
  });
};

export const signup = (newUserParam) => async (dispatch) => {};
