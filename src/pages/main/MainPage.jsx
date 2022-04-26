import React from "react";
import Tag from "@component/Tag";
import PlayListCard from "@page/common/playListCard";
import EventBar from "@page/main/components/eventBar";
import * as Mock from "@data/mock";
import LoginModal from "@page/common/modal/LoginModal";
import Appbar from "../common/appbar/Appbar";

export default function MainPage() {
  // TODO movielist_container 공통 스타일로 빼기
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="container ml-auto mr-auto pt-28">
      <Appbar onOpenModal={setShowModal} />
      <div className="flex pl-6 text-2xl items-center w-[1250px] mr-auto ml-auto pt-6">
        <h1 className="pr-4 text-base">인기태그</h1>
        {Mock.popularTags.tags.map((tag, index) => {
          return (
            <div className="pr-2" key={index}>
              <Tag text={tag} size="small" />
            </div>
          );
        })}
      </div>

      <section className=" pt-4  w-[1200px] mr-auto ml-auto">
        <h1 className="ml-6 text-2xl">좋아요 순</h1>
        <div className="flex justify-between items-center mt-3 w-[95%] ml-auto mr-auto pr-10 pl-10">
          {Mock.playList.playList.map((movie, index) => {
            return (
              <div key={index}>
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
      </section>
      <section className=" w-[1200px] mr-auto ml-auto h-[400px] pt-4 ">
        <h1 className="ml-6 text-2xl">태그기반 추천</h1>
        <div className="flex justify-between items-center mt-3 w-[95%] ml-auto mr-auto pr-10 pl-10">
          {Mock.playList.playList.map((movie, index) => {
            return (
              <div key={index}>
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
      </section>

      <aside className="mt-16 mb-16 border-t-2 border-b-2">
        <EventBar
          eventType="투표"
          eventName="여름이 오면 가장 먼저 생각나는 오싹한 호러영화를 투표해주세요!"
        />
      </aside>

      <section className="w-[1200px] mr-auto ml-auto h-[400px] pt-4 ">
        <h1 className="ml-6 text-2xl">좋아요 순</h1>
        <div className="flex justify-between items-center mt-3 w-[95%] ml-auto mr-auto pr-10 pl-10">
          {Mock.playList.playList.map((movie, index) => {
            return (
              <div key={index}>
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
      </section>
      <div className="w-full h-20 mt-16 text-white bg-gray-400">분리영역</div>
      <footer className="w-full text-white bg-gray-600 h-36 ">
        footer 영역
      </footer>
      <LoginModal open={showModal} onClose={setShowModal} />
    </div>
  );
}
