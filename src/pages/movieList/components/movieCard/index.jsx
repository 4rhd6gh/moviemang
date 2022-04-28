import React, { useEffect } from "react";
import PropTypes, { func } from "prop-types";
import { CgMathPercent } from "react-icons";

export default function MovieCard(props) {
  const { poster_path, title, vote_average, release_date } = props;
  const canvasRef = React.createRef(null);

  function drawCanvas() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(20, 20, 18, (Math.PI / 180) * 270, -90);
    ctx.fill();

    ctx.strokeStyle = vote_average >= 7 ? "#00FF00" : "#dcf836";
    ctx.beginPath();
    ctx.lineWidth = 2.5;
    let endAngle = 0;

    if (vote_average === 10) {
      endAngle = -90;
    } else if (vote_average < 2.5) {
      endAngle = -36 * vote_average;
    } else {
      endAngle = (Math.PI / 180) * ((270 * (vote_average - 2.5)) / 7.5);
    }

    ctx.arc(20, 20, 15, (Math.PI / 180) * 270, endAngle);
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
          <canvas
            width={"40px"}
            height={"40px"}
            onClick={drawCanvas}
            ref={canvasRef}
          />
          <div className=" absolute bottom-[4.5rem] right-6 text-white">
            <div className="flex">
              <div>
                <span className=" font-[Consensus] text-sm">
                  {vote_average * 10}
                </span>
              </div>
              <div className="pt-1 ml-[-2px]">
                <CgMathPercent className="w-[10px] h-[10px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-9 right-4"></div>
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
