import * as apis from "@service/apis/movieMang";
import * as actions from "@data/rootActions";

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

export const getMyPlaylist = () => async (dispatch) => {
  console.log("my playlist 요청 시작");
  try {
    dispatch(actions.common.startLoading);

    const response = await apis.requestAxios("get", "/myplaylist/playlist");

    console.log(response);

    if (response.status === 200) {
      dispatch(actions.common.endLoading);
      return response.data.playList;
    } else {
      dispatch(actions.common.endLoading);
      return response.status;
    }
  } catch (err) {}
};
