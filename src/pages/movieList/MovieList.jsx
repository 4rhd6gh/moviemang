import React, { useEffect } from "react";
import MovieCard from "./components/movieCard";
import * as Constants from "@constant";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as action from "@data/rootActions";
import * as selector from "@data/rootSelectors";
import useInfiniteScroll from "@hook/useInfinitiScroll.hook";
import NoImage from "@res/img/noimg.png";
import StaticIcon from "@component/Icons/StaticIcon";
import { BsArrowUpCircleFill } from "react-icons/bs";

export default function MovieList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movieArray = useSelector(selector.movie.getPopularMovieList);
  const page = useSelector(selector.movie.getCurrentPage);
  const totalPages = useSelector(selector.movie.getTotalPages);
  const [isFetching, setIsFetching] = useInfiniteScroll(getMovieList);
  const toTheTop = () => {
    window.scrollTo(0, 0);
  };

  async function getMovieList() {
    if (page === 0) {
      dispatch(action.movie.getPopularMovieList());
    } else if (page <= totalPages) {
      dispatch(action.movie.getPopularMovieList(page + 1));
      setIsFetching(false);
    } else {
      return;
    }
  }
  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <div>
          <h1 className="p-10 mb-8 text-4xl font-bold text-white ">
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
                  poster_path={
                    movie.poster_path === null
                      ? NoImage
                      : Constants.TM_MOVIE_IMAGE_URL + movie.poster_path
                  }
                  title={movie.title}
                  release_date={movie.release_date}
                  vote_average={movie.vote_average}
                  onClick={() => navigate(`/movieDetail/${movie.id}`)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="fixed bottom-3 right-96">
        <StaticIcon
          icon={BsArrowUpCircleFill}
          size="large"
          color="text-[#dcf836]"
          onClick={toTheTop}
        />
      </div>
    </>
  );
}
