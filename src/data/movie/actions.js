import * as ActionTypes from "@data/rootActionTypes";
import * as apis from "@service/apis/tmMovie";

export const getPopularMovieList = (page) => async (dispatch) => {
  try {
    const response = await apis.requestAxios(
      "get",
      "/movie/popular",
      { page: 40000 },
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
        type: ActionTypes.POPULAR_MOVIE_LIST_FAILURE,
        payload: response,
      });
    }
  } catch (error) {
    dispatch({
      type: ActionTypes.POPULAR_MOVIE_LIST_FAILURE,
      payload: { message: "잘못된 요청입니다." },
    });
  }
};
