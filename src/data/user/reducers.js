import * as ActionTypes from "@data/rootActionTypes";

const initialState = {
  userData: {},
  hasError: false,
  errorMessage: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return {
        hasError: false,
        errorMessage: null,
        userData: action.payload,
      };
    case ActionTypes.LOGIN_FAILURE:
      return { hasError: true, errorMessage: action.payload };
    case ActionTypes.LOGIN_FAILURE_CLEAR:
      return { hasError: false, errorMessage: null };
    case ActionTypes.LOGOUT_SUCCESS:
      return { hasError: false, errorMessage: null };

    case ActionTypes.CHANGE_NICKNAME_SUCCESS:
      return {
        ...state,
        userData: { ...state.userData, nickname: action.payload },
      };
    default:
      return state;
  }
}
