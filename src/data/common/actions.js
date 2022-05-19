import * as ActionTypes from "@data/rootActionTypes";

export async function hasError(dispatch) {
  dispatch({ type: ActionTypes.HAS_ERROR });
}

export async function confirmError(dispatch) {
  dispatch({ type: ActionTypes.CONFIRM_ERROR });
}
