import React, { useEffect } from "react";
import MovieCard from "./components/movieCard";
import * as Constants from "@constant";
import { useSelector, useDispatch } from "react-redux";
import * as action from "@data/rootActions";
import * as selector from "@data/rootSelectors";

export default function MovieList() {
  const dispatch = useDispatch();
  const movieArray = useSelector(selector.movie.getPopularMovieList);
  async function getMovieList() {
    dispatch(action.movie.getPopularMovieList());
  }
  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <div>
          <h1 className=" p-10 mb-8 font-[Dosis] font-bold text-white text-4xl">
            Popular Movies
          </h1>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className=" w-[70%]">
          <div className="flex flex-wrap justify-between ml-16 mr-16">
            {movieArray.map((movie, index) => (
              <div className="pt-5 pr-14" key={index}>
                <MovieCard
                  poster_path={Constants.TM_MOVIE_IMAGE_URL + movie.poster_path}
                  title={movie.title}
                  release_date={movie.release_date}
                  vote_average={movie.vote_average}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
