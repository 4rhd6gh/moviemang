import * as ActionTypes from "@data/rootActionTypes";
import * as apis from "@service/apis/tmMovie";

export const getSearchMovieList = (value) => async (dispatch) => {
  try {
    const response = await apis.requestAxios(
      "GET",
      "search/movie",
      {},
      1,
      value
    );
    dispatch({
      type: ActionTypes.SEARCH_MOVIE_LIST_SUCCESS,
      payload: response.results,
    });
  } catch (error) {}
};
