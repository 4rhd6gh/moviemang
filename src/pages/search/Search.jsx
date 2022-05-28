import React, { useEffect } from "react";
import MovieSearchCard from "./components/movieSearchCard";
import * as Constants from "@constant";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import * as action from "@data/rootActions";
import * as selector from "@data/rootSelectors";
import useInfiniteScroll from "@hook/useInfinitiScroll.hook";
import NoImage from "@res/img/noimg.png";

export default function Search() {
  const dispatch = useDispatch();
  const movieList = useSelector(selector.search.getSearchMovieList);
  const page = useSelector(selector.search.getCurrentPage);
  const totalPages = useSelector(selector.search.getTotalPages);
  const [isFetching, setIsFetching] = useInfiniteScroll(getSearchMovieList);

  const location = useLocation();
  const value = location.state === null ? "" : location.state.value;

  async function getSearchMovieList(page, totalPages) {
    console.log("search", page, totalPages);
    if (page <= totalPages) {
      dispatch(action.search.getSearchMovieList(value, page + 1));
      //무한스크롤
    } else return;
  }

  useEffect(() => {
    dispatch(action.common.startLoading);
    getSearchMovieList(0, 0);
  }, [value]);

  useEffect(() => {
    dispatch(action.common.endLoading);
  }, [movieList]);

  useEffect(() => {
    console.log(totalPages);
  });

  return (
    <>
      <div className="flex justify-center ">
        <div>
          <h1 className="p-5 mb-8 text-4xl font-bold text-white ">검색결과</h1>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className=" w-[70%]">
          <ul className="flex flex-col flex-wrap justify-between ml-16 mr-16">
            {movieList.map((movie, i) => (
              <MovieSearchCard
                key={i + movie.title}
                poster_path={
                  movie.poster_path === null
                    ? NoImage
                    : Constants.TM_MOVIE_IMAGE_URL + movie.poster_path
                }
                title={movie.title}
                release_date={movie.release_date}
                overview={movie.overview}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
