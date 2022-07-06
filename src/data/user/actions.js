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
        localStorage.setItem("Is", response.data.token);
        localStorage.setItem("nickname", response.data.nickname);

        if (loginParams.loginType === "google") {
          navigate(-1);
        }
        navigate(-2);
      } else if (response.data.message === "닉네임을 설정해 주세요.") {
        navigate("/nickname");
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

export const createNickName =
  (createNickNameParams, navigate) => async (dispatch) => {
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
        navigate("/");
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

export const logout = (navigate) => (dispatch) => {
  dispatch({
    type: ActionTypes.LOGOUT_SUCCESS,
  });

  localStorage.removeItem("Is");
  localStorage.removeItem("nickname");
  navigate("/");
};

export const confirmError = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.LOGIN_FAILURE_CLEAR,
  });
};
