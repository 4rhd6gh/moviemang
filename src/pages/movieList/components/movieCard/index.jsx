import React, { useEffect } from "react";
import PropTypes, { func } from "prop-types";

export default function MovieCard(props) {
  const { poster_path, title, vote_average, release_date } = props;
  const canvasRef = React.createRef(null);

  function drawCanvas() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "white";
    ctx.arc(20, 20, 15, 0, 360);
    ctx.stroke();
  }

  useEffect(() => {
    drawCanvas();
  }, []);

  return (
    <div className="relative overflow-hidden border-solid rounded-lg border-1">
      <div className="image w-[159px]">
        <div className="wrapper">
          <img
            src={poster_path}
            alt={title}
            className=" object-cover h-[220px] w-[159px]"
          />
        </div>
        <div className="absolute bottom-9 right-4">
          <canvas
            width={"30px"}
            height={"30px"}
            onClick={drawCanvas}
            ref={canvasRef}
          ></canvas>
        </div>
        <div className="mt-3 ">
          <h2 className="text-sm font-bold text-white ">{title}</h2>
        </div>
        <div>
          <h2 className=" text-xs font-bold text-[#abb7c4]">{release_date}</h2>
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
