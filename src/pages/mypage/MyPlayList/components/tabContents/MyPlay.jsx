import React from "react";
import PlayListCard from "@page/common/playListCard";
import * as Mock from "@data/mock";
import StaticIcon from "@component/Icons/StaticIcon";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export default function MyPlayList() {
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
          {Mock.playList.playList.map((movie, index) => {
            return (
              <div key={index} className="mr-10 md:last:hidden">
                <PlayListCard
                  title={movie.title}
                  id={movie.id}
                  imageArray={movie.image}
                  likeCount={movie.likeCount}
                  movieCount={movie.movieCount}
                  tagArray={movie.tagArray}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
