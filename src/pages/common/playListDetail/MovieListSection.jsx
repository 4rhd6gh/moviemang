import React from "react";
import PropTypes from "prop-types";
import * as Constants from "@constant";
import { BsTrash } from "react-icons/bs";
import StaticIcon from "@component/Icons/StaticIcon";

export default function MovieListSection(props) {
  const { movieArray = [], kind } = props;
  console.log(movieArray);
  return (
    <div className="mt-16">
      {movieArray.map((movie, index) => {
        return (
          <div key={index} className="flex items-center mb-6">
            <img
              src={Constants.TM_MOVIE_IMAGE_URL + movie.mvPosterPath}
              alt="movies"
              className="object-cover w-[103px] h-[153px]"
            />
            <div className=" bg-[#091a2c] px-3 py-3 w-[82%] h-[153px]">
              <h2 className="text-xl">{movie.mvTitle}</h2>
              <div className=" text-[#abb7c4]">{movie.mvDirector}</div>
            </div>
            {kind === "my" ? (
              <div>
                <StaticIcon
                  icon={BsTrash}
                  size="small"
                  color="text-[#dd003f]"
                />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

MovieListSection.propTypes = {
  movieArray: PropTypes.array,
  kind: PropTypes.string,
};
