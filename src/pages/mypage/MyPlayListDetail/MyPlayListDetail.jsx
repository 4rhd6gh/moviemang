import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import * as selector from "@data/rootSelectors";
import * as actions from "@data/rootActions";
import * as apis from "@service/apis/movieMang";
import { useDispatch } from "react-redux";
import MainSection from "@page/common/playListDetail/MainSection";
import MovieListSection from "@page/common/playListDetail/MovieListSection";

export default function MyPlayListDetail() {
  const dispatch = useDispatch();
  const { playlistId } = useParams();
  const [playlist, setPlayList] = useState([]);
  const nickname = useSelector(selector.user.getNickname);

  const getMyPlaylistDetail = async () => {
    try {
      dispatch(actions.common.startLoading);
      const response = await apis.requestAxios(
        "get",
        `/myplaylist/playlist/${playlistId}`
      );

      if (response.status === 200) {
        dispatch(actions.common.endLoading);
        setPlayList(response.data.playList);
      } else {
        dispatch(actions.common.endLoading);
      }
    } catch (err) {
      dispatch(actions.common.endLoading);
    }
  };

  useEffect(() => {
    getMyPlaylistDetail();
  }, []);
  return (
    <main className="text-white w-[1100px] mr-auto ml-auto mt-8">
      <MainSection
        tags={playlist.tags}
        playListId={playlistId}
        playListTitle={playlist.playlistTitle}
        kind={"my"}
        playListDesc={playlist.playlistDesc}
        movieArray={playlist.movies}
        nickname={nickname}
      />
      <MovieListSection
        movieArray={playlist.movies}
        kind={"my"}
        refreshFunc={getMyPlaylistDetail}
        playlistId={playlistId}
      />
    </main>
  );
}
