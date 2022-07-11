import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PlayListCard from "@page/common/playListCard";
import * as actions from "@data/rootActions";
import StaticIcon from "@component/Icons/StaticIcon";
import { IoMdAddCircle } from "react-icons/io";
import * as selector from "@data/rootSelectors";
import { Link } from "react-router-dom";
import Paging from "@component/Paging";

const PAGE_DATA_LIMIT = 9;

export default function MyPlayList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myPlayList = useSelector(selector.playlist.getMyPlaylist);
  const totalCount = useSelector(selector.playlist.getTotalCount);
  const nickname = useSelector(selector.user.getNickname);
  //TODO paging 처리
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(actions.playlist.getMyPlaylist(page * 9, PAGE_DATA_LIMIT));
  }, [page]);

  return (
    <>
      <div className="mt-10 ">
        <Link to="/member/playlist/create">
          <div className="flex items-center pl-8 mb-6">
            <StaticIcon
              icon={IoMdAddCircle}
              size="medium"
              color="text-[#dd003f]"
            />
            <span className="ml-2 text-white">신규 리스트 생성하기</span>
          </div>
        </Link>
        <div className="grid grid-cols-3 pl-10 gap-x-44 gap-y-10">
          {myPlayList.map((playlist, index) => {
            return (
              <div key={index} className="mr-10 md:last:hidden">
                <PlayListCard
                  title={playlist.playlistTitle}
                  id={playlist.playlistId}
                  nickname={nickname}
                  movieArray={playlist.movies}
                  likeCount={0}
                  movieCount={playlist.movies.length}
                  tagArray={playlist.tags}
                  onClick={() =>
                    navigate("/member/playlist/" + playlist.playlistId)
                  }
                />
              </div>
            );
          })}
        </div>
        <div className="pl-16 mt-8">
          <Paging totalCount={totalCount} page={page} onChange={setPage} />
        </div>
      </div>
    </>
  );
}
