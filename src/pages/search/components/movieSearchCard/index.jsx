import React from "react";
import PropTypes from "prop-types";
import Button from "@component/Button";

export default function MovieSearchCard(props) {
  const { poster_path, title, overview, release_date } = props;

  return (
    <li className="flex flex-row w-full py-5 ">
      <img
        src={poster_path}
        alt={title}
        className="w-1/6 object-cover h-[130px] w-[90px]"
      />
      <div className="relative w-5/6 px-5 mx-5 border-l border-gray-500 border-solid">
        <div className="absolute top-0 right-0">
          <Button variant="contained" text="+" type="button" width="w-10" />
        </div>
        <h2 className="text-xl font-semibold text-white">{title}</h2>
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
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string,
  release_date: PropTypes.string,
};
