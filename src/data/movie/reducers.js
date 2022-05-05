import * as ActionTypes from "@data/rootActionTypes";

const initialState = {};

export default function movie(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.POPULAR_MOVIE_LIST_SUCCESS:
      return { ...state, popMovieList: action.payload };
    case ActionTypes.POPULAR_MOVIE_LIST_FAILURE:
      return action.user;
    default:
      return state;
  }
}
