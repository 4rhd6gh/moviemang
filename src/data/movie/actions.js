import * as ActionTypes from "@data/rootActionTypes";
import * as apis from "@service/apis/tmMovie/movie";

export const getPopularMovieList = () => async (dispatch) => {
  try {
    //dispatch({ type: ActionTypes.LOADING_START });
    console.log("redux getPopularMovieList");
    const response = await apis.getPopularMovieList("GET", "/popular", {}, 1);

    console.log(response);
    dispatch({
      type: ActionTypes.POPULAR_MOVIE_LIST_SUCCESS,
      payload: response.results,
    });

    //await dispatch({ type: ActionTypes.LOADING_END });
  } catch (error) {
    //dispatch({ type: ActionTypes.LOADING_END, payload: error });
  }
};
