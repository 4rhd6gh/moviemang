import React from "react";
import PropTypes from "prop-types";

export default function MovieCard(props) {
  const { poster_path, title, vote_average, release_date } = props;
  return (
    <div className="relative overflow-hidden border-2 border-solid rounded-sm">
      <div className="image w-[158.664px]">
        <div className="wrapper">
          <img src={poster_path} alt={title} />
        </div>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number,
  release_date: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
