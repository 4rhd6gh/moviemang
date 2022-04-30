import React, { useEffect, useState } from "react";
import Appbar from "@page/common/appbar/Appbar";
import * as MovieService from "@api/tmMovie/movie";
import MovieCard from "./components/movieCard";
import * as Constants from "@constant";

export default function MovieList() {
  const [showModal, setShowModal] = useState(false);
  const [movieList, setMovieList] = useState([]);
  async function getMovieList() {
    const response = await MovieService.getMovieList("GET", "/popular", {}, 1);
    setMovieList(response.results);
  }

  useEffect(() => {
    getMovieList();
  }, []);
  return (
    <div className="container ml-auto mr-auto pt-28 ">
      <Appbar onOpenModal={setShowModal} />
      <div className=" bg-[#020d18] ">
        <div className="flex justify-center ">
          <div>
            <h1 className=" p-10 mb-8 font-[Dosis] font-bold text-white text-4xl">
              Popular Movie
            </h1>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className=" w-[70%]">
            <div className="flex flex-wrap justify-between ml-16 mr-16">
              {movieList.map((movie) => (
                <div className="pt-5 pr-14">
                  <MovieCard
                    poster_path={
                      Constants.TM_MOVIE_IMAGE_URL + movie.poster_path
                    }
                    title={movie.title}
                    release_date={movie.release_date}
                    vote_average={movie.vote_average}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
