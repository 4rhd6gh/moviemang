import * as ActionTypes from "@data/rootActionTypes";

const initialState = {};

export default function user(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return { ...state, userData: action.payload };
    case ActionTypes.LOGIN_FAILURE:
      return action.user;
    case ActionTypes.SIGNUP_SUCCESS:
      return action.user;
    case ActionTypes.SIGNUP_SUCCESS:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
}
