import React, { useEffect, useState } from "react";
import Tag from "@component/Tag";
import PlayListCard from "@page/common/playListCard";
import EventBar from "@page/main/components/eventBar";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "@data/rootActions";
import * as apis from "@service/apis/movieMang";
import * as Mock from "@data/mock";
import * as apis from "@service/apis/movieMang";
import { useState } from "react";

export default function MainPage() {
  const [popularTags, setPopularTags] = useState([]);

  async function getPopularTags() {
    let response;
    try {
      response = await apis.requestAxios("get", "/playlist/popularTag");
      setPopularTags(response.data.popularTag);
    } catch (err) {

  const dispatch = useDispatch();
  const [likeOrderPlayList, setLikeOrderPlayList] = useState([]);
  async function getLikeOrderPlaylist() {
    try {
      dispatch(actions.common.startLoading);
      const response = await apis.requestAxios(
        "get",
        `/playlist/likeOrder`,
        {},
        {}
      );
      console.log(response);
      if (response.status === 200) {
        dispatch(actions.common.endLoading);
        setLikeOrderPlayList(response.data.playList);
      } else {
        dispatch(actions.common.endLoading);
      }
    } catch (err) {
      dispatch(actions.common.endLoading);

      console.log(err);
    }
  }

  useEffect(() => {
    getLikeOrderPlaylist();
    window.scrollTo(0, 0);
    getPopularTags();
  }, []);

  return (
    <>
      <div className="flex pl-6 text-2xl items-center w-[1250px] mr-auto ml-auto pt-6">
        <h1 className="pr-4 ml-16 text-base text-gray-500 tablet:text-xl md:ml-8">
          인기태그
        </h1>
        {popularTags.map((tag, index) => {
          return (
            <div className="pr-2" key={index}>
              <Tag text={tag.tagName} size="small" />
            </div>
          );
        })}
      </div>
      <section className=" pt-4 w-[1200px] tablet:w-[970px] md:w-[700px] mr-auto ml-auto">
        <h1 className="ml-16 text-2xl font-bold text-textMainColor tablet:text-xl md:ml-8 md:text-lg">
          # 좋아요가 가장 많은
        </h1>
        <div className="flex justify-between items-center mt-3 w-[95%] ml-auto mr-auto pr-10 pl-10 md:w-[700px] md:justify-center">
          {likeOrderPlayList.map((playlist, index) => {
            return (
              <div key={index} className="mr-10 md:last:hidden">
                <PlayListCard
                  title={playlist.playlistTitle}
                  id={playlist.playlistId}
                  nickname={playlist.nickname}
                  movieArray={playlist.movies}
                  likeCount={playlist.like}
                  movieCount={playlist.movies.length}
                  tagArray={playlist.tags}
                  onClick={() => console.log("detail 이동")}
                />
              </div>
            );
          })}
        </div>
      </section>
      <section className=" w-[1200px] mt-6 mr-auto ml-auto h-[400px] pt-4 mb-4 tablet:w-[970px]">
        <h1 className="ml-16 text-2xl font-bold text-textMainColor tablet:text-xl">
          # 태그기반 추천
        </h1>
        <div className="flex justify-between items-center mt-3 w-[95%] ml-auto mr-auto pr-10 pl-10">
          {Mock.playList.playList.map((movie, index) => {
            return (
              <div key={index} className="tablet:last:hidden">
                <PlayListCard
                  title={movie.title}
                  id={movie.id}
                  imageArray={movie.image}
                  nickname={movie.id}
                  likeCount={movie.likeCount}
                  movieCount={movie.movieCount}
                  tagArray={movie.tagArray}
                />
              </div>
            );
          })}
        </div>
      </section>

      <aside className="mt-20 mb-10">
        <EventBar
          eventType="투표"
          eventName="여름이 오면 가장 먼저 생각나는 오싹한 호러영화를 투표해주세요!"
        />
      </aside>

      <section className=" w-[1200px] mt-6 mr-auto ml-auto h-[400px] pt-4 mb-4 tablet:w-[970px]">
        <h1 className="ml-16 text-2xl font-bold text-textMainColor tablet:text-xl">
          # 태그기반 추천
        </h1>
        <div className="flex justify-between items-center mt-3 w-[95%] ml-auto mr-auto pr-10 pl-10">
          {Mock.playList.playList.map((movie, index) => {
            return (
              <div key={index} className="tablet:last:hidden">
                <PlayListCard
                  title={movie.title}
                  id={movie.id}
                  imageArray={movie.image}
                  nickname={movie.id}
                  likeCount={movie.likeCount}
                  movieCount={movie.movieCount}
                  tagArray={movie.tagArray}
                />
              </div>
            );
          })}
        </div>
      </section>
      <div className="w-full h-20 mt-16"></div>
    </>
  );
}
