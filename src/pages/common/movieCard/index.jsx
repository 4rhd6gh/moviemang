import React from "react";
import PropTypes from "prop-types";

export default function MovieCard(props) {
  const { poster, title, date } = props;

  return (
    <div className="mb-2 overflow-hidden shadow-md rounded-xl w-[200px] tablet:w-[150px] md:mr-2 md:ml-2">
      <div className="h-[260px] w-full bg-white rounded-lg tablet:h-[195px] md:h-[150px]">
        <div className="flex flex-wrap w-full h-full">
          <img
            src={poster}
            alt="movies"
            className="inline-block object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="mb-2 bg-transparent bg-white rounded-b-xl">
        <h3 className="p-3 text-lg ">{title}</h3>
        <h3 className="px-3 pb-3 text-sm text-gray-500 ">{date}</h3>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
};
