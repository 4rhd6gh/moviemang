import React, { useEffect } from "react";
import * as action from "@data/rootActions";
import * as selector from "@data/rootSelectors";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as Constants from "@constant";
import StaticIcon from "@component/Icons/StaticIcon";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";
import Tabs from "./components/tabs";

export default function MovieDetail() {
  const dispatch = useDispatch();
  const movieId = useParams().movieId;

  const movieDetailInfo = useSelector(selector.movie.getMovieDetail);
  async function getMovieDetail() {
    dispatch(action.movie.getPopularMovieDetail(movieId));
  }
  console.log(movieDetailInfo);
  useEffect(() => {
    getMovieDetail();
  }, []);
  return (
    <>
      <div className="flex pt-20 pl-20 text-2xl w-[1250px] mr-auto ml-auto">
        <div>
          <img
            src={Constants.TM_MOVIE_IMAGE_URL + movieDetailInfo?.poster_path}
            alt={movieDetailInfo?.title}
            className=" object-cover h-[505px] w-[330px]"
          />
        </div>
        <div className="ml-20 ">
          <div className="flex">
            <h1 className="text-4xl font-bold text-white ">
              {movieDetailInfo?.title}
            </h1>
            <span className="ml-4 text-gray-500">
              {movieDetailInfo?.release_date
                ? movieDetailInfo?.release_date.split("-")[0]
                : ""}
            </span>
          </div>
          <div className="flex mt-5">
            <div>
              <StaticIcon
                icon={AiOutlineHeart}
                size="medium"
                color="text-[#dd003f]"
              />
            </div>
            <div className="ml-4">
              <StaticIcon
                icon={IoMdAddCircle}
                size="medium"
                color="text-[#dd003f]"
              />
            </div>
          </div>
          <Tabs />
        </div>
      </div>
    </>
  );
}
