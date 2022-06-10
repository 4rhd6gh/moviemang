import React, { useEffect, useState } from "react";
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
  const currentPage = useSelector(selector.search.getCurrentPage);
  const currentTotalPages = useSelector(selector.search.getTotalPages);
  const [isNewSearch, setIsNewSearch] = useState(false);
  const [isFetching, setIsFetching] = useInfiniteScroll(getSearchMovieList);

  const location = useLocation();
  const value = location.state === null ? "" : location.state.value;

  async function getSearchMovieList() {
    if (currentPage === 0 || isNewSearch) {
      dispatch(action.search.getSearchMovieList(value, 1));
      setIsNewSearch(false);
    } else if (currentPage < currentTotalPages) {
      dispatch(action.search.getSearchMovieList(value, currentPage + 1));
      setIsFetching(false);
    } else return;
  }

  useEffect(() => {
    dispatch(action.common.startLoading);
    setIsNewSearch(true);
    getSearchMovieList();
  }, [value]);

  useEffect(() => {
    dispatch(action.common.endLoading);
  }, [movieList]);

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
                movieId={movie.id}
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
