import * as ActionTypes from "@data/rootActionTypes";

const initialState = {
  popMovieList: [],
  page: 0,
  total_pages: 0,
  popMovieDetail: {},
};

export default function movie(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.POPULAR_MOVIE_LIST_SUCCESS:
      return {
        popMovieList: [...state.popMovieList, ...action.payload.results],
        page: action.payload.page,
        total_pages: action.payload.total_pages,
      };
    case ActionTypes.POPULAR_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        popMovieDetail: action.payload,
      };
    case ActionTypes.POPULAR_MOVIE_DETAIL_RESET:
      return {
        ...state,
        popMovieDetail: {},
      };
    default:
      return state;
  }
}
