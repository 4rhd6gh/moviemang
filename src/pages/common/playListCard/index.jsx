import React from "react";
import PropTypes from "prop-types";
import StaticIcon from "@component/Icons/StaticIcon";
import Tag from "@component/Tag";
import * as Constants from "@constant";
import { AiOutlineHeart } from "react-icons/ai";
import NoMovie from "@res/img/nomovie.png";
import { useNavigate } from "react-router-dom";

function ImageOneLine(props) {
  const { images, len } = props;
  let width;
  if (len === 1) {
    width = "w-full";
  } else if (len === 2) {
    width = "w-1/2";
  } else if (len === 3) {
    width = "w-1/3";
  }
  if (len === 0) {
    return (
      <img
        loading="lazy"
        className={`bg-gray-300 object-fill h-full inline-block ${width}`}
        src={NoMovie}
        alt="movies"
      />
    );
  } else {
    return (
      <>
        {images.map((image, index) => {
          return (
            <img
              key={index}
              loading="lazy"
              className={`object-cover h-full inline-block ${width}`}
              src={image}
              alt="movies"
            />
          );
        })}
      </>
    );
  }
}

function ImageTwoLine(props) {
  const { images } = props;
  return (
    <>
      <div className="flex flex-wrap w-full h-full">
        <img
          src={images[0]}
          alt="movies"
          className="object-cover w-1/3 h-1/2"
        />
        <img
          src={images[1]}
          alt="movies"
          className="object-cover w-1/3 h-1/2"
        />

        <img
          src={images[2]}
          alt="movies"
          className="object-cover w-1/3 h-1/2"
        />
        <img
          src={images[3]}
          alt="movies"
          className="object-cover w-1/3 h-1/2"
        />
        <img
          src={images[4]}
          alt="movies"
          className="object-cover w-1/3 h-1/2"
        />
        <img
          src={images[5]}
          alt="movies"
          className="object-cover w-1/3 h-1/2"
        />
      </div>
    </>
  );
}

export default function PlayListCard(props) {
  const navigate = useNavigate();

  const {
    id,
    movieArray = [],
    title,
    likeCount,
    movieCount,
    nickname,
    tagArray,
  } = props;
  let imageArray = [];
  movieArray.map((item) =>
    imageArray.push(Constants.TM_MOVIE_IMAGE_URL + item.mvPosterPath)
  );

  let imgLen = imageArray.length;

  if (imgLen > 3 && imgLen < 6) {
    imgLen = 3;
    imageArray = imageArray.slice(0, 3);
  }
  return (
    <div
      className="mb-2 overflow-hidden playlistCard rounded-xl w-[246px] tablet:w-[200px] md:mr-2 md:ml-2 cursor-pointer"
      onClick={() => {
        navigate(`/member/playlist/${id}`);
      }}
    >
      <div className="h-[246px] w-full bg-white rounded-lg tablet:h-[200px] md:h-[150px]">
        {imgLen < 6 ? (
          <ImageOneLine images={imageArray} len={imgLen} />
        ) : (
          <ImageTwoLine images={imageArray} />
        )}
      </div>
      <div className="bg-transparent bg-cardBackgroundColor rounded-b-xl">
        <h4 className="p-3 text-sm h-[60px] text-textMainColor">{title}</h4>
        <div className="flex justify-start">
          <span className="ml-4 mr-1 text-xs text-red-600">ID</span>
          <span className="text-xs text-[#dcf836]">{nickname}</span>
        </div>
        <div className="flex items-center justify-start pl-4 mt-2">
          <StaticIcon icon={AiOutlineHeart} size="small" color="text-red-600" />
          <span className="ml-[3px] text-lg text-red-600">{likeCount}</span>
          <span className="ml-3 text-xs text-gray-300">
            영화 {movieCount}편
          </span>
        </div>
        <div className="flex flex-row flex-wrap justify-start pb-4 pl-2 pr-2 mt-3">
          {tagArray.map((tag, index) => (
            <div className="pl-2 mb-1" key={index}>
              <Tag key={index} text={tag.tagName} size="small" />
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
  nickname: PropTypes.string.isRequired,
  likeCount: PropTypes.number.isRequired,
  movieCount: PropTypes.number.isRequired,
  tagArray: PropTypes.array,
  onClick: PropTypes.func,
};
