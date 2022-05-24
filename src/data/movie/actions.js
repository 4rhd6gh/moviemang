import * as ActionTypes from "@data/rootActionTypes";
import * as apis from "@service/apis/tmMovie";

export const getPopularMovieList = (page) => async (dispatch) => {
  try {
    const response = await apis.requestAxios(
      "get",
      "/movie/popular",
      { page: page },
      {}
    );
    console.log(response);
    if (response.status === 200) {
      dispatch({
        type: ActionTypes.POPULAR_MOVIE_LIST_SUCCESS,
        payload: response.data,
      });
    } else {
      dispatch({
        type: ActionTypes.HAS_ERROR,
        payload: response.massege,
      });
    }
  } catch (error) {
    dispatch({
      type: ActionTypes.HAS_ERROR,
      payload: {
        massege: "서버에 문제가 발생했습니다. 잠시 뒤 다시 시도해 주세요.",
      },
    });
  }
};

export const getPopularMovieDetail = (id) => async (dispatch) => {
  try {
    const response = await apis.requestAxios("get", "/movie/" + id, {}, {});
    console.log(response);
    if (response.status === 200) {
      dispatch({
        type: ActionTypes.POPULAR_MOVIE_DETAIL_SUCCESS,
        payload: response.data,
      });
    } else {
      dispatch({
        type: ActionTypes.HAS_ERROR,
        payload: response.massege,
      });
    }
  } catch (error) {
    dispatch({
      type: ActionTypes.HAS_ERROR,
      payload: {
        massege: "서버에 문제가 발생했습니다. 잠시 뒤 다시 시도해 주세요.",
      },
    });
  }
};
