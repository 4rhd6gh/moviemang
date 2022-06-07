import React from "react";
import PlayListCard from "@page/common/playListCard";
import * as Mock from "@data/mock";
export default function JjimPlayList() {
  return (
    <>
      <div className="mt-10 ">
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
