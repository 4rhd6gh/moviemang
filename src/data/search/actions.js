import * as ActionTypes from "@data/rootActionTypes";
import * as apis from "@service/apis/tmMovie";

export const getSearchMovieList = (value, page) => async (dispatch) => {
  console.log(value);
  try {
    const response = await apis.requestAxios("get", "/search/movie", {
      page: page,
      query: value,
    });
    if (response.status === 200) {
      dispatch({
        type: ActionTypes.SEARCH_MOVIE_LIST_SUCCESS,
        payload: response.data,
      });
    } else {
      dispatch({
        type: ActionTypes.HAS_ERROR,
        payload: response.message,
      });
    }
  } catch (error) {
    dispatch({
      type: ActionTypes.HAS_ERROR,
      payload: {
        message: "서버에 문제가 발생했습니다. 잠시 뒤 다시 시도해 주세요.",
      },
    });
  }
};
