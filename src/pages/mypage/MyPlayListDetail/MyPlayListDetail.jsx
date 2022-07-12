import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import * as selector from "@data/rootSelectors";
import MainSection from "@page/common/playListDetail/MainSection";
import MovieListSection from "@page/common/playListDetail/MovieListSection";

export default function MyPlayListDetail() {
  const { playlistId } = useParams();
  const myPlayList = useSelector(selector.playlist.getMyPlaylist);
  const nickname = useSelector(selector.user.getNickname);
  const playlist = myPlayList.find(
    (playlist) => playlist.playlistId === playlistId
  );
  return (
    <main className="text-white w-[1100px] mr-auto ml-auto mt-8">
      <MainSection
        tags={playlist.tags}
        playListTitle={playlist.playlistTitle}
        kind={"my"}
        playListDesc={playlist.playlistDesc}
        movieArray={playlist.movies}
        nickname={nickname}
      />
      <MovieListSection movieArray={playlist.movies} kind={"my"} />
    </main>
  );
}
