import * as ActionTypes from "@data/rootActionTypes";

const initialState = { searchMovieList: [], page: 0, total_pages: 0 };

export default function search(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SEARCH_MOVIE_LIST_SUCCESS:
      return {
        searchMovieList:
          action.payload.page === 1
            ? action.payload.results
            : [...state.searchMovieList, ...action.payload.results],
        page: action.payload.page,
        total_pages: action.payload.total_pages,
      };
    case ActionTypes.SEARCH_MOVIE_LIST_FAILURE:
      return action.user;
    default:
      return state;
  }
}
