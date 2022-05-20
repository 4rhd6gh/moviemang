import * as ActionTypes from "@data/rootActionTypes";

const initialState = {
  loading: false,
  error: false,
  errorMessage: null,
};

export default function common(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case ActionTypes.HAS_ERROR:
      return { ...state, error: true, errorMessage: action.payload };
    case ActionTypes.CONFIRM_ERROR:
      return { ...state, error: false, errorMessage: null };
    default:
      return state;
  }
}
