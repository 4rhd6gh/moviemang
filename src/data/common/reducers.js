import * as ActionTypes from "../rootActionTypes";

const initialState = {
  loading: false,
};

export default function loading(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOADING_START:
      return { ...state, loading: true };
    case ActionTypes.LOADING_END:
      return { ...state, loading: false };
    default:
      return state;
  }
}
