import React from "react";
import PropTypes from "prop-types";
import Tag from "@component/Tag";
import * as Constants from "@constant";
import NoImage from "@res/img/noimg.png";

export default function Overview(props) {
  const { overview, genres = [], crew = [], cast = [], recommand = [] } = props;
  const castList = cast.length > 10 ? cast.slice(0, 9) : cast;

  return (
    <div>
      <div className="flex mb-4">
        {genres.map((tag, index) => {
          return (
            <div className="pr-2" key={index}>
              <Tag text={tag.name} size="small" />
            </div>
          );
        })}
      </div>
      <div className=" w-[700px] text-lg text-[#abb7c4]">{overview}</div>
      <div className="mt-4">
        <div className="text-[#abb7c4] text-[15px]">Director</div>
        <div className="text-[#4280bf] text-[15px]">
          {crew.find((item) => item.job === "Director")?.name}
        </div>
      </div>
      <div className="w-[700px]">
        <div className="mt-10 text-white">CAST</div>
        <div className="overflow-x-auto overflow-y-hidden whitespace-nowrap">
          <ul className="pb-3">
            {castList.map((item, index) => {
              return (
                <li
                  key={index}
                  className="inline-block p-4 m-0 overflow-hidden rounded-lg "
                >
                  <img
                    src={Constants.TM_MOVIE_IMAGE_URL + item.profile_path}
                    alt={""}
                    className="object-cover h-[175px] w-[138px]"
                  />
                  <div className="mt-3 text-sm text-center text-white">
                    {item.name}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="w-[700px]">
        <div className="mt-10 text-white">RELATED MOVIES</div>
        <div className="overflow-x-auto overflow-y-hidden whitespace-nowrap">
          <ul className="pb-3">
            {recommand.map((item, index) => {
              return (
                <li
                  key={index}
                  className="inline-block p-4 m-0 overflow-hidden rounded-lg "
                >
                  <img
                    src={
                      item.backdrop_path === null
                        ? NoImage
                        : Constants.TM_MOVIE_IMAGE_URL + item.backdrop_path
                    }
                    onError={console.log("err")}
                    alt={""}
                    className="object-cover h-[141px] w-[250px]"
                  />
                  <div className="mt-3 text-sm text-center text-white">
                    {item.title}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
Overview.propTypes = {
  overview: PropTypes.string,
  genres: PropTypes.array,
  crew: PropTypes.array,
  cast: PropTypes.array,
  recommand: PropTypes.array,
};
