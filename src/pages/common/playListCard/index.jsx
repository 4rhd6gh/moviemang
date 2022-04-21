import React from "react";
import PropTypes from "prop-types";
import StaticIcon from "@component/Icons/StaticIcon";
import Tag from "@component/Tag/Tag";
import { AiOutlineHeart } from "react-icons/ai";
export default function PlayListCard(props) {
  const { image, title, id, likeCount, movieCount, tagArray, onClick } = props;

  return (
    <div className=" contents">
      <div></div>
      <div className="">
        <img
          src={image}
          className="object-none h-[236px] w-[236px]"
          alt="movie"
        />
      </div>
      <div className="w-[236px] ">
        <h4 className="p-3 text-sm text-indigo-900">{title}</h4>
        <div className="flex justify-start">
          <span className="ml-4 mr-1 text-xs text-red-600">ID</span>
          <span className="text-xs">{id}</span>
        </div>
        <div className="flex items-center justify-start pl-2">
          <StaticIcon
            icon={AiOutlineHeart}
            size="small"
            color="text-gray-300"
          />
          <span className="text-xs text-gray-300">{likeCount}</span>
          <span className="ml-3 text-xs text-gray-300">{movieCount}편</span>
        </div>
        <div className="flex items-center justify-start pl-3">
          {tagArray.map((tag, index) => (
            <div className="pl-2" key={index}>
              <Tag key={index} text={tag} size="small" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

PlayListCard.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  likeCount: PropTypes.number.isRequired,
  movieCount: PropTypes.number.isRequired,
  tagArray: PropTypes.array,
  onClick: PropTypes.func,
};
