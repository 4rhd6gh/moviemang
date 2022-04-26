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
        <div className="w-[1280px]">
          <div className="flex justify-between ml-auto mr-auto">
            <div className="">
              {movieList.map((movie) => (
                <MovieCard
                  poster_path={Constants.TM_MOVIE_IMAGE_URL + movie.poster_path}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
