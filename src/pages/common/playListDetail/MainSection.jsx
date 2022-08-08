import React, { useState } from "react";
import ProbTypes from "prop-types";
import * as Constants from "@constant";
import StaticIcon from "@component/Icons/StaticIcon";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import NoImage from "@res/img/noimg.png";
import Alert from "@page/common/alert";
import { useDispatch } from "react-redux";
import * as actions from "@data/rootActions";
import * as apis from "@service/apis/movieMang";
import { useNavigate } from "react-router-dom";
import * as apis from "@service/apis/movieMang";

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
    playlistId,
    tags = [],
    playListTitle,
    playListId,
    kind,
    playListDesc,
    movieArray = [],
    nickname,
    likeStatus,
    setLikeStatus,
  } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const deleteAlert = () => {
    setOpen(true);
  };

  async function deletePlaylist(playlistId) {
    try {
      dispatch(actions.common.startLoading);
      const response = await apis.requestAxios(
        "delete",
        `/myplaylist/playlist/${playlistId}`,
        {},
        {}
      );
      if (response.status === 204) {
        dispatch(actions.common.endLoading);
        setOpen(false);
        navigate(`/member/playlist`);
      }
    } catch (err) {
      dispatch(actions.common.endLoading);
      console.log(err);
    }
  }

  let imageArray = [];
  movieArray.map((item) =>
    imageArray.push(Constants.TM_MOVIE_IMAGE_URL + item.mvPosterPath)
  );

  let imgLen = imageArray.length;

  if (imgLen > 3 && imgLen < 6) {
    imgLen = 3;
    imageArray = imageArray.slice(0, 3);
  }

  const handleHeartonClick = async (e) => {
    const response = await apis.requestAxios(
      likeStatus ? "delete" : "post",
      "/playlist/like",
      {},
      { playlistId: playlistId }
    );

    setLikeStatus((prev) => !prev);
    console.log(response);
  };

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
              icon={likeStatus ? AiFillHeart : AiOutlineHeart}
              size="medium"
              color="text-[#dd003f]"
              onClick={handleHeartonClick}
            />
          </div>
          <div className="ml-4">
            {kind === "my" ? (
              <StaticIcon
                icon={BsTrash}
                size="medium"
                color="text-[#dd003f]"
                onClick={() => deleteAlert()}
              />
            ) : (
              <StaticIcon
                icon={FaRegBookmark}
                size="medium"
                color="text-[#dd003f]"
              />
            )}
          </div>
          <div className="ml-4">
            {kind === "my" ? (
              <StaticIcon
                icon={BiPencil}
                size="medium"
                color="text-[#dd003f]"
                onClick={() => deleteAlert()}
              />
            ) : null}
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
      <Alert
        open={open}
        message={`"${playListTitle}" 플레이리스트를 삭제하시겠습니까? 플레이리스트 삭제 시 플레이리스트에 담긴 모든 영화를 삭제하며 복구할 수 없습니다.`}
        onConfirm={deletePlaylist}
        targetId={playListId}
        onClose={setOpen}
      />
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
