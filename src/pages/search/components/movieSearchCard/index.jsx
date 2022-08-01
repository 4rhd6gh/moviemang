import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function MovieSearchCard(props) {
  const { movieId, poster_path, title, overview, release_date } = props;
  const navigate = useNavigate();
  return (
    <li className="flex flex-row w-full py-5 ">
      <img
        onClick={() => {
          navigate(`/movieDetail/${movieId}`);
        }}
        src={poster_path}
        alt={title}
        className="w-1/6 object-cover h-[130px] w-[90px] cursor-pointer"
      />
      <div className="relative w-5/6 px-5 mx-5 border-l border-gray-500 border-solid">
        <div className="flex">
          <h2
            onClick={() => {
              navigate(`/movieDetail/${movieId}`);
            }}
            className="text-xl font-semibold text-white cursor-pointer"
          >
            {title}
          </h2>
        </div>
        <p className="text-base text-gray-400">{release_date}</p>
        <div className="">
          <p className="mt-5 text-white">
            {overview.length < 70 ? overview : overview.slice(0, 65) + "..."}
          </p>
        </div>
      </div>
    </li>
  );
}

MovieSearchCard.propTypes = {
  movieId: PropTypes.number.isRequired,
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string,
  release_date: PropTypes.string,
};
