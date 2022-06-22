import * as ActionTypes from "@data/rootActionTypes";

const initialState = {
  hasError: false,
  errorMessage: null,
  accessToken: null,
  refreshToken: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return { hasError: false, userData: action.payload, errorMessage: null };
    case ActionTypes.LOGIN_FAILURE:
      return { hasError: true, errorMessage: action.payload };
    case ActionTypes.LOGIN_FAILURE_CLEAR:
      return { hasError: false, errorMessage: null };
    case ActionTypes.SIGNUP_SUCCESS:
      return action.user;
    case ActionTypes.SIGNUP_SUCCESS:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
}
