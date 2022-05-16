import React, { useEffect, useState } from "react";
import Spinner from "@page/common/spinner";
import MovieSearchCard from "./components/movieSearchCard";
import * as Constants from "@constant";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import * as action from "@data/rootActions";
import * as selector from "@data/rootSelectors";

export default function Search() {
  const dispatch = useDispatch();
  const movieList = useSelector(selector.search.getSearchMovieList);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const value = location.state === null ? "" : location.state.value;
  async function getSearchMovieList() {
    dispatch(action.search.getSearchMovieList(value));
  }

  useEffect(() => {
    setLoading(true);
    getSearchMovieList();
  }, [value]);

  useEffect(() => {
    setLoading(false);
  }, [movieList]);

  return (
    <>
      <div className=" bg-[#020d18] ">
        <div className="flex justify-center ">
          <div>
            <h1 className=" p-5 mb-8 font-[Dosis] font-bold text-white text-4xl">
              검색결과
            </h1>
          </div>
        </div>
        <div className="flex justify-center w-full">
          {loading ? (
            <Spinner />
          ) : (
            <div className=" w-[70%]">
              <div className="flex flex-col flex-wrap justify-between ml-16 mr-16">
                {movieList.map((movie) => (
                  <div className="w-full py-5">
                    <MovieSearchCard
                      key={movie.title}
                      poster_path={
                        Constants.TM_MOVIE_IMAGE_URL + movie.poster_path
                      }
                      title={movie.title}
                      release_date={movie.release_date}
                      overview={movie.overview}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
