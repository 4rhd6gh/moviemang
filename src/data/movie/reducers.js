import * as ActionTypes from "@data/rootActionTypes";

const initialState = { popMovieList: [], page: 0, total_pages: 0 };

export default function movie(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.POPULAR_MOVIE_LIST_SUCCESS:
      return {
        popMovieList: [...state.popMovieList, ...action.payload.results],
        page: action.payload.page,
        total_pages: action.payload.total_pages,
      };
    default:
      return state;
  }
}
