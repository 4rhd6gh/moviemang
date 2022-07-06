import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as action from "@data/rootActions";
import * as apis from "@service/apis/movieMang";

import { useNavigate } from "react-router-dom";
import Input from "@component/Input";
import Button from "@component/Button";

export default function CreatePlayList() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [tags, setTags] = useState([]);
  const [clickedTags, setClickedTags] = useState([]);
  const [warningText, setWarningText] = useState("transparent");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    setTitle(e.currentTarget.value);
  };

  const handleContentsChange = (e) => {
    setContents(e.currentTarget.value);
  };

  const handleClickTag = (e) => {
    let tag = e.currentTarget.value.slice(1);

    if (clickedTags.includes(tag))
      setClickedTags(clickedTags.filter((clicked) => clicked !== tag));
    else setClickedTags([...clickedTags, tag]);
  };

  async function getTags() {
    let response;
    try {
      response = await apis.requestAxios("get", "/myplaylist/tag");
      setTags(response.data.tags);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getTags();
  }, []);

  const Tags = () => {
    return tags.map((tag, index) => {
      return (
        <Button
          key={index}
          type="button"
          text={`#${tag.tagName}`}
          value={`#${tag.tagName}`}
          size="small"
          margin="m-0"
          color={
            clickedTags.includes(tag.tagName)
              ? "text-[#dcf836]"
              : "text-textMainColor hover:text-[#dcf836]"
          }
          backgroundColor="bg-transparent"
          onClick={handleClickTag}
        />
      );
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (clickedTags.length === 0) setWarningText("[#dcf836]");
    else {
      const response = await dispatch(
        action.playlist.createPlaylist({
          playlistTitle: title,
          playlistDesc: contents,
          tags: clickedTags,
        })
      );

      if (response === 200) navigate("/member/playlist");
    }
  };

  const handleButtonOnclick = () => {
    navigate("/member/playlist");
  };

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col justify-center w-[60%] p-10 border-4 border-solid rounded-b border-[#0E2133] bg-[#0C1A2A] ">
        <h2 className="text-textMainColor mb-5">플레이리스트 생성하기</h2>
        <div className="flex flex-col justify-center ">
          <form id="playlistForm" onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="제목"
              width="w-full"
              padding="p-3"
              margin="mb-3"
              textColor="text-black"
              backgroundColor="bg-[#233A50]"
              borderRadius="rounded-lg"
              onChange={handleTitleChange}
              required={true}
            />
            <textarea
              row={10}
              placeholder="상세 설명"
              onChange={handleContentsChange}
              required
              className="w-full p-3 mb-3 bg-[#233A50] rounded-lg h-40 resize-none"
            />
            <div className="flex flex-row flex-wrap p-3 justify-center">
              {Tags()}
            </div>
            <p
              className={`text-${warningText} mt-2 text-sm flex flex-row-reverse`}
            >
              하나 이상의 태그를 선택해 주세요
            </p>

            <div className="flex flex-row-reverse mt-3">
              <Button
                variant="contained"
                form="playlistForm"
                text="확인"
                type="submit"
                width="w-20"
                margin="m-0"
                backgroundColor="bg-themePink"
                borderRadius="rounded-lg"
              />
              <Button
                variant="contained"
                text="취소"
                type="button"
                width="w-20"
                margin="mr-5"
                backgroundColor="bg-[#233A50]"
                borderRadius="rounded-lg"
                onClick={handleButtonOnclick}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
