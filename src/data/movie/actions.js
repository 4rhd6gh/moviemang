import * as ActionTypes from "@data/rootActionTypes";
import * as apis from "@service/apis/tmMovie/movie";

export const getPopularMovieList = (page) => async (dispatch) => {
  try {
    //dispatch({ type: ActionTypes.LOADING_START });
    console.log("redux getPopularMovieList");
    const response = await apis.getPopularMovieList(
      "GET",
      "/movie/popular",
      {},
      page
    );

    console.log(response);
    dispatch({
      type: ActionTypes.POPULAR_MOVIE_LIST_SUCCESS,
      payload: response,
    });

    //await dispatch({ type: ActionTypes.LOADING_END });
  } catch (error) {
    //dispatch({ type: ActionTypes.LOADING_END, payload: error });
  }
};
