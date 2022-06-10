import * as ActionTypes from "@data/rootActionTypes";

export const hasError = (message) => async (dispatch) => {
  dispatch({
    type: ActionTypes.HAS_ERROR,
    payload: message,
  });
};

export async function confirmError(dispatch) {
  dispatch({ type: ActionTypes.CONFIRM_ERROR });
}

export async function startLoading(dispatch) {
  dispatch({ type: ActionTypes.LOADING_START });
}

export async function endLoading(dispatch) {
  dispatch({ type: ActionTypes.LOADING_END });
}
