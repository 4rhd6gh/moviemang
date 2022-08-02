import React from "react";
import ProbTypes from "prop-types";
import * as Constants from "@constant";
import StaticIcon from "@component/Icons/StaticIcon";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import NoImage from "@res/img/noimg.png";

const tagColors = ["bg-[#1692BB]", "bg-[#F5B50A]", "bg-[#EC5A1A]"];

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
        className={` object-fill h-full inline-block ${width}`}
        src={NoImage}
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

export default function MainSection(props) {
  const {
    tags,
    playListTitle,
    kind,
    playListDesc,
    movieArray = [],
    nickname,
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
    <div className="flex">
      <div className=" w-[66%] pl-3 pr-3">
        <div className="mb-4 ">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`${
                tagColors[index % 3]
              } pb-1 pt-1 pr-2 pl-2 rounded-sm mr-1`}
            >
              <span className="text-sm font-bold text-white">
                {tag.tagName}
              </span>
            </span>
          ))}
        </div>
        <div>
          <span className="mr-2 text-xl italic text-[#F5B50A]">{nickname}</span>
          <span className="italic text-[#abb7c4]">님의 플레이리스트</span>
        </div>
        <h1>
          <span className="text-5xl font-bold text">{playListTitle}</span>
        </h1>
        <div className="mt-4">
          <span className="text-sm text-gray-600">{playListDesc}</span>
        </div>
        <div className="flex mt-5">
          <div>
            <StaticIcon
              icon={AiOutlineHeart}
              size="medium"
              color="text-[#dd003f]"
            />
          </div>
          <div className="ml-4">
            {kind === "my" ? (
              <StaticIcon icon={BsTrash} size="medium" color="text-[#dd003f]" />
            ) : (
              <StaticIcon
                icon={FaRegBookmark}
                size="medium"
                color="text-[#dd003f]"
              />
            )}
          </div>
        </div>
      </div>
      <div className=" w-[34%]">
        <div className="h-[400px] w-[85%] bg-white rounded-lg tablet:h-[200px] md:h-[150px]">
          {imgLen < 6 ? (
            <ImageOneLine images={imageArray} len={imgLen} />
          ) : (
            <ImageTwoLine images={imageArray} />
          )}
        </div>
      </div>
    </div>
  );
}

MainSection.propTypes = {
  tags: ProbTypes.array,
  playListTitle: ProbTypes.string,
  kind: ProbTypes.string,
  playListDesc: ProbTypes.string,
  movieArray: ProbTypes.array,
  nickname: ProbTypes.string,
};
