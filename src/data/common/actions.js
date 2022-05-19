import * as ActionTypes from "../rootActionTypes";

export async function startLoading(dispatch) {
  dispatch({ type: ActionTypes.LOADING_START });
}

export async function endLoading(dispatch) {
  dispatch({ type: ActionTypes.LOADING_END });
}
