import * as ActionTypes from "@data/rootActionTypes";
import * as apis from "@service/apis/movieMang";
import * as actions from "@data/rootActions";

export const snsLogin = (loginParams) => async (dispatch) => {
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
        localStorage.setItem("Is", response.data.token);
        localStorage.setItem("nickname", response.data.nickname);
      }
    } else {
      dispatch(actions.common.endLoading);
      dispatch({
        type: ActionTypes.LOGIN_FAILURE,
        payload: response.message,
      });
    }

    return response.data;
  } catch (error) {
    console.log(error);
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

    console.log(response);

    if (response.status === 200) {
      dispatch(actions.common.endLoading);

      await dispatch({
        type: ActionTypes.LOGIN_SUCCESS,
        payload: response.data,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("nickname", response.data.nickname);
    } else {
      dispatch(actions.common.endLoading);
      dispatch({
        type: ActionTypes.LOGIN_FAILURE,
        payload: response.message,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: ActionTypes.LOGOUT_SUCCESS,
  });

  localStorage.removeItem("Is");
  localStorage.removeItem("nickname");
};

export const confirmError = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.LOGIN_FAILURE_CLEAR,
  });
};
