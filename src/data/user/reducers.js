import * as ActionTypes from "@data/rootActionTypes";

const initialState = {
  hasError: false,
  errorMessage: null,
  authMessage: "",
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return {
        hasError: false,
        errorMessage: null,
        authMessage: action.payload.message,
      };
    case ActionTypes.LOGIN_FAILURE:
      return { hasError: true, errorMessage: action.payload };
    case ActionTypes.LOGIN_FAILURE_CLEAR:
      return { hasError: false, errorMessage: null };
    default:
      return state;
  }
}
