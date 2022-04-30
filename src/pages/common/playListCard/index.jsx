import React from "react";
import PropTypes from "prop-types";
import StaticIcon from "@component/Icons/StaticIcon";
import Tag from "@component/Tag";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmarkFill } from "react-icons/bs";
import Tooltip from "@component/Tooltip";

function ImageOneLine(props) {
  const { images, len } = props;
  let width;
  if (len === 1) {
    width = "w-[246px]";
  } else if (len === 2) {
    width = "w-[123px]";
  } else if (len === 3) {
    width = "w-[82px]";
  }
  return (
    <>
      {images.map((image, index) => {
        return (
          <img
            key={index}
            className={`object-cover h-[246px] ${width}`}
            src={image}
            alt="moives"
          />
        );
      })}
    </>
  );
}

function ImageTwoLine(props) {
  const { images } = props;
  return (
    <>
      <div>
        <img
          src={images[0]}
          alt="movies"
          className="object-cover h-[123px] w-[82px]"
        />
        <img
          src={images[1]}
          alt="movies"
          className="object-cover h-[123px] w-[82px]"
        />
      </div>
      <div>
        <img
          src={images[2]}
          alt="movies"
          className="object-cover h-[123px] w-[82px]"
        />
        <img
          src={images[3]}
          alt="movies"
          className="object-cover h-[123px] w-[82px]"
        />
      </div>
      <div>
        <img
          src={images[4]}
          alt="movies"
          className="object-cover h-[123px] w-[82px]"
        />
        <img
          src={images[5]}
          alt="movies"
          className="object-cover h-[123px] w-[82px]"
        />
      </div>
    </>
  );
}

export default function PlayListCard(props) {
  const { imageArray, title, id, likeCount, movieCount, tagArray, onClick } =
    props;
  let imgLen = imageArray.length;
  if (imgLen > 3 && imgLen < 6) {
    imgLen = 3;
    imageArray.slice(0, 3);
  }
  return (
    <div className="mb-2 overflow-hidden playlistCard rounded-xl">
      {/* className="border-gray-300 border-solid border-[1.5px]" */}
      <div className="flex items-center justify-center w-[246px] rounded-lg">
        {imgLen < 6 ? (
          <ImageOneLine images={imageArray} len={imgLen} />
        ) : (
          <ImageTwoLine images={imageArray} />
        )}
      </div>
      <div className="w-[246px] bg-transparent bg-cardBackgroundColor rounded-b-xl">
        <h4 className="p-3 text-sm h-[60px] text-textMainColor">{title}</h4>
        <div className="flex justify-start">
          <span className="ml-4 mr-1 text-xs text-red-600">ID</span>
          <span className="text-xs">{id}</span>
        </div>
        <div className="flex items-center justify-start pl-4 mt-2">
          <StaticIcon
            icon={AiOutlineHeart}
            size="small"
            color="text-gray-300"
          />
          <span className="ml-[3px] text-xs text-gray-300">{likeCount}</span>
          <div className="ml-3" id="bookmark">
            <Tooltip tooltipText="해당 플레이리스트를 즐겨찾기 해두고 영화를 감상하세요.">
              <StaticIcon
                icon={BsBookmarkFill}
                size="small"
                color="text-gray-300"
              />
            </Tooltip>
          </div>
          <span className="ml-3 text-xs text-gray-300">
            영화 {movieCount}편
          </span>
        </div>
        <div className="flex items-center justify-start pb-4 pl-3 mt-3">
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
  imageArray: PropTypes.array,
  likeCount: PropTypes.number.isRequired,
  movieCount: PropTypes.number.isRequired,
  tagArray: PropTypes.array,
  onClick: PropTypes.func,
};
