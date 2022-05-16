import * as ActionTypes from "@data/rootActionTypes";
import * as apis from "@service/apis/tmMovie/movie";

export const getSearchMovieList = (value) => async (dispatch) => {
  try {
    const response = await apis.getSearchMovieList(
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
