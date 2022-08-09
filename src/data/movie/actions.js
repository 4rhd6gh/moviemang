import * as ActionTypes from "@data/rootActionTypes";
import * as action from "@data/rootActions";
import * as apis from "@service/apis/tmMovie";

export const resetMovieDetail = () => {
  return {
    type: ActionTypes.POPULAR_MOVIE_DETAIL_RESET,
  };
};

export const getPopularMovieList = (page) => async (dispatch) => {
  try {
    dispatch(action.common.startLoading);
    const response = await apis.requestAxios(
      "get",
      "/movie/popular",
      { page: page },
      {}
    );
    if (response.status === 200) {
      dispatch(action.common.endLoading);
      dispatch({
        type: ActionTypes.POPULAR_MOVIE_LIST_SUCCESS,
        payload: response.data,
      });
    } else {
      dispatch(action.common.endLoading);
      dispatch({
        type: ActionTypes.HAS_ERROR,
        payload: response.message,
      });
    }
  } catch (error) {
    dispatch(action.common.endLoading);
    dispatch({
      type: ActionTypes.HAS_ERROR,
      payload: {
        message: "서버에 문제가 발생했습니다. 잠시 뒤 다시 시도해 주세요.",
      },
    });
  }
};

export const getPopularMovieDetail = (id) => async (dispatch) => {
  try {
    dispatch(action.common.startLoading);
    const response = await apis.requestAxios("get", "/movie/" + id, {}, {});
    console.log(id);
    if (response.status === 200) {
      const response2 = await apis.requestAxios(
        "get",
        "/movie/" + id + "/credits",
        {},
        {}
      );
      const response3 = await apis.requestAxios(
        "get",
        "/movie/" + id + "/watch/providers",
        {},
        {}
      );
      const response4 = await apis.requestAxios(
        "get",
        "/movie/" + id + "/recommendations",
        {},
        {}
      );
      dispatch(action.common.endLoading);
      dispatch({
        type: ActionTypes.POPULAR_MOVIE_DETAIL_SUCCESS,
        payload: {
          ...response.data,
          ...response2.data,
          KR: response3.data.results.KR,
          recommend: response4.data.results,
        },
      });
    } else {
      dispatch(action.common.endLoading);
      dispatch({
        type: ActionTypes.HAS_ERROR,
        payload: response.message,
      });
    }
  } catch (error) {
    dispatch(action.common.endLoading);
    dispatch({
      type: ActionTypes.HAS_ERROR,
      payload: {
        message: "서버에 문제가 발생했습니다. 잠시 뒤 다시 시도해 주세요.",
      },
    });
  }
};
