import * as apis from "@service/apis/movieMang";
import * as actions from "@data/rootActions";
import * as ActionTypes from "@data/rootActionTypes";

export const createPlaylist = (createPlaylistParams) => async (dispatch) => {
  console.log("playlist 생성 요청 시작");
  try {
    dispatch(actions.common.startLoading);

    const response = await apis.requestAxios(
      "post",
      "/myplaylist/playlist",
      {},
      createPlaylistParams
    );

    console.log(response);

    if (response.status === 200) {
      dispatch(actions.common.endLoading);
      return response.status;
    } else {
      dispatch(actions.common.endLoading);
      return response.status;
    }
  } catch (err) {}
};

export const getMyPlaylist = (page, limit) => async (dispatch) => {
  console.log("my playlist 요청 시작");
  try {
    dispatch(actions.common.startLoading);

    const response = await apis.requestAxios(
      "get",
      `/myplaylist/playlist?page=${page}&limit=${limit}`
    );

    console.log(response);

    if (response.status === 200) {
      dispatch(actions.common.endLoading);
      dispatch({
        type: ActionTypes.REQUEST_PLAYLIST_SUCCESS,
        payload: response.data,
      });
    } else {
      dispatch(actions.common.endLoading);
      dispatch({
        type: ActionTypes.REQUEST_PLAYLIST_FAILURE,
        payload: response.data,
      });
    }
  } catch (err) {
    dispatch(actions.common.endLoading);
  }
};
