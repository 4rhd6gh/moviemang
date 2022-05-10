import React, { useEffect, useState } from "react";

import Spinner from "@page/common/spinner";
import * as MovieService from "@api/tmMovie/movie";
import MovieSearchCard from "./components/movieSearchCard";
import * as Constants from "@constant";
import { useLocation } from "react-router-dom";


export default function Search() {

  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);

  const location = useLocation();
  const value = location.state === null ? "" : location.state.value;

  async function getSearchMovieList() {
    const response = await MovieService.getSearchMovieList(
      "GET",
      "search/movie",
      {},
      1,
      value
    );
    const movies = response.results;
    setMovieList(movies);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    getSearchMovieList();
  }, [value]);

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
