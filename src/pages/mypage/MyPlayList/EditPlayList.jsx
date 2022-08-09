import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import * as actions from "@data/rootActions";
import * as apis from "@service/apis/movieMang";

import Button from "@component/Button";
import Input from "@component/Input";

export default function EditPlayList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { playlistId } = useParams();

  const [playlistTitle, setPlayListTitle] = useState("");
  const [playlistDescription, setPlayListDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [clickedTags, setClickedTags] = useState([]);
  const [tagWarningVisibilty, setTagWarningVisibility] = useState("invisible");

  const handleOnTitleInputChange = (e) => {
    setPlayListTitle(e.currentTarget.value);
  };

  const handleOnDescriptionTextAreaChange = (e) => {
    setPlayListDescription(e.currentTarget.value);
  };

  const handleClickTag = (e) => {
    const currentlyClickedTag = e.currentTarget.value.slice(1);

    if (clickedTags.includes(currentlyClickedTag)) {
      setClickedTags(
        clickedTags.filter((clickedTag) => clickedTag !== currentlyClickedTag)
      );
    } else {
      setClickedTags([...clickedTags, currentlyClickedTag]);
    }
  };

  const getCurrentPlayListDetail = async () => {
    dispatch(actions.common.startLoading);

    const response = await apis.requestAxios(
      "get",
      `/myplaylist/playlist/${playlistId}`
    );

    if (response.status === 200) {
      // includes통해서 기존 태그 표시하기 위해서 백엔드에서 객체 배열로 받아오는 tag 목록에서 tag이름만 뽑아서 배열로 변환
      const currentTagArray = response.data.playList.tags.map(
        (tag) => tag.tagName
      );

      dispatch(actions.common.endLoading);
      setPlayListTitle(response.data.playList.playlistTitle);
      setPlayListDescription(response.data.playList.playlistDesc);
      setClickedTags(currentTagArray);
    } else {
      // TODO 에러처리
      dispatch(actions.common.endLoading);
    }
  };

  const getTags = async () => {
    const response = await apis.requestAxios("get", "/myplaylist/tag");

    if (response.status === 200) {
      console.log(response.data);
      setTags(response.data.tags);
    }

    //TODO 에러처리
  };

  const renderTags = () => {
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

  console.log(clickedTags);

  const handleOnPlayListEditFormSubmit = async (e) => {
    e.preventDefault();

    if (clickedTags.length === 0) setTagWarningVisibility("");
    else {
      const response = await dispatch(
        actions.playlist.editPlaylist({
          playlistId: playlistId,
          playlistTitle: playlistTitle,
          playlistDesc: playlistDescription,
          tags: clickedTags,
        })
      );

      //TODO 에러처리
      //TODO 성공에 따른 피드백 제공(모달창 등)
      if (response === 200) navigate(`/member/playlist/${playlistId}`);
      // console.log(clickedTags);
    }
  };

  const handleOnCancelButtonClick = () => {
    navigate(`/member/playlist/${playlistId}`);
  };

  useEffect(() => {
    getCurrentPlayListDetail();
    getTags();
  }, []);

  return (
    <main className="flex justify-center w-full">
      <div className="flex flex-col justify-center w-[60%] p-10 border-4 border-solid rounded-b border-[#0E2133] bg-[#0C1A2A] ">
        <h2 className="mb-5 text-textMainColor">플레이리스트 수정하기</h2>
        <div className="flex flex-col justify-center ">
          <form id="playlistForm" onSubmit={handleOnPlayListEditFormSubmit}>
            <Input
              type="text"
              value={playlistTitle}
              placeholder={playlistTitle}
              width="w-full"
              padding="p-3"
              margin="mb-3"
              textColor="text-textMainColor"
              backgroundColor="bg-[#233A50]"
              borderRadius="rounded-lg"
              onChange={handleOnTitleInputChange}
              required={true}
            />
            <textarea
              row={10}
              placeholder={playlistDescription}
              value={playlistDescription}
              onChange={handleOnDescriptionTextAreaChange}
              required
              className="w-full p-3 mb-3 bg-[#233A50] text-textMainColor rounded-lg h-40 resize-none"
            />
            <div className="flex flex-row flex-wrap justify-center gap-2 p-3">
              {renderTags()}
            </div>
            <p
              className={`${tagWarningVisibilty} text-[#dcf836] mt-2 text-sm flex flex-row-reverse`}
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
                onClick={handleOnCancelButtonClick}
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
