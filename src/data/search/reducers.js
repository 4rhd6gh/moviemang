import * as ActionTypes from "@data/rootActionTypes";

const initialState = { searchMovieList: [] };

export default function search(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SEARCH_MOVIE_LIST_SUCCESS:
      return { ...state, searchMovieList: action.payload };
    case ActionTypes.SEARCH_MOVIE_LIST_FAILURE:
      return action.user;
    default:
      return state;
  }
}
