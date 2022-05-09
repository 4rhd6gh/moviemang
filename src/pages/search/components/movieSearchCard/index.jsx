import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Button from "@component/Button";

export default function MovieSearchCard(props) {
  const { poster_path, title, overview, release_date } = props;

  return (
    <div className="flex flex-row ">
      <img
        src={poster_path}
        alt={title}
        className="w-1/6 object-cover h-[130px] w-[90px]"
      />
      <div className="relative w-5/6 px-5 mx-5 border-l border-solid border-gray-500">
        <div className="absolute top-0 right-0">
          <Button
            variant="contained"
            text="+"
            type="button"
            width={10}
            height={10}
          />
        </div>
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="text-base text-gray-400">{release_date}</p>
        <div className="">
          <p className="text-white mt-5">
            {overview.length < 70 ? overview : overview.slice(0, 65) + "..."}
          </p>
        </div>
      </div>
    </div>
  );
}

MovieSearchCard.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string,
  release_date: PropTypes.string,
};
