import * as ActionTypes from "@data/rootActionTypes";

const initialState = {
  totalCount: 0,
  playlist: [],
  hasError: false,
  errorMessage: null,
};

export default function playlist(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.REQUEST_PLAYLIST_SUCCESS:
      return {
        hasError: false,
        errorMessage: null,
        playlist: action.payload.playList,
        totalCount: action.payload.totalCount,
      };
    case ActionTypes.REQUEST_PLAYLIST_FAILURE:
      return { hasError: true, errorMessage: action.payload };
    default:
      return state;
  }
}
