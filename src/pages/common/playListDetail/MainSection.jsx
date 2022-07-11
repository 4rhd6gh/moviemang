import React from "react";
import ProbTypes from "prop-types";
import StaticIcon from "@component/Icons/StaticIcon";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";

const tagColors = ["#1692BB", "#F5B50A", "#EC5A1A"];

export default function MainSection(props) {
  const { tags, playListTitle } = props;
  return (
    <div>
      <div className=" w-[66%] pl-3 pr-3">
        <div className="mb-4 ">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`bg-[${
                tagColors[index % 3]
              }] pb-1 pt-1 pr-2 pl-2 rounded-sm mr-1`}
            >
              <span className="text-sm font-bold text-white">
                {tag.tagName}
              </span>
            </span>
          ))}
        </div>
        <h1>
          <span className="text-5xl font-bold text">{playListTitle}</span>
        </h1>
        <div className="flex mt-5">
          <div>
            <StaticIcon
              icon={AiOutlineHeart}
              size="medium"
              color="text-[#dd003f]"
            />
          </div>
          <div className="ml-4">
            <StaticIcon
              icon={IoMdAddCircle}
              size="medium"
              color="text-[#dd003f]"
            />
          </div>
        </div>
      </div>
      <div className=" w-[34%]"></div>
    </div>
  );
}

MainSection.propTypes = {
  tags: ProbTypes.array,
  playListTitle: ProbTypes.string,
};
