import * as ActionTypes from "@data/rootActionTypes";

const initialState = {
  loading: false,
  error: false,
  errorMessage: null,
};

export default function common(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.HAS_ERROR:
      return { ...state, error: true, errorMessage: action.payload };
    case ActionTypes.CONFIRM_ERROR:
      return { ...state, error: false, errorMessage: null };
    case ActionTypes.LOADING_START:
      return { ...state, loading: true };
    case ActionTypes.LOADING_END:
      return { ...state, loading: false };
    default:
      return state;
  }
}
