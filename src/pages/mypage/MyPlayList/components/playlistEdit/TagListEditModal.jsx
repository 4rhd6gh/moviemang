import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import PropTypes from "prop-types";
import * as apis from "@service/apis/movieMang";
import * as actions from "@data/rootActions";

import Button from "@component/Button";

// 현재 플레이리스트에 등록되어 있는 태그 목록은 MyPlayListDetail컴포넌트에서 props로 전달받아 처리함
// 전체 태그 availableTagList / 나의 태그 currentUserTagsList 로 이름 지어서 해당 state 기반으로 렌더함수 선언해서 요소 렌더하는 형식으로 구현
// 태그 클릭 시 클릭된 태그들을 임시로 담을 배열을 선언하고 해당 배열과 기존에 목록배열을 비교 및 더해서 추가/삭제시 배열값 업데이트

export default function TagListEditModal(props) {
  const dispatch = useDispatch();

  const { playlistId, setIsOpen, currentUserTags } = props;
  const [availableTagsList, setAvailableTagsList] = useState([]);
  const [currentUserTagsList, setCurrentUserTagsList] =
    useState(currentUserTags);

  const [clickedAvailableTags, setClickedAvailableTags] = useState([]);
  const [clickedCurrentUserTags, setClickedCurrentUserTags] = useState([]);

  const handleOnTagListEditModalClose = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  // 전체 태그 중 현재 유저가 선택한 태그를 제외한 목록을 불러오기 위한 함수
  const getAvailableTags = async () => {
    let response;

    try {
      response = await apis.requestAxios("get", "/myplaylist/tag");

      // 태그 추가/삭제 로직 일관성있게 처리하게 위해 [{tagName: '애니메이션'}, ...] 형태로 오는 response를 ['애니메이션',..]의 형태로 변환
      const transformedAllTagsArray = response.data.tags.map(
        (tagData) => tagData.tagName
      );

      setAvailableTagsList(
        transformedAllTagsArray.filter(
          (tag) => currentUserTagsList.includes(tag) === false
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  // 태그 목록 렌더링 하는 함수
  const renderAvailableTags = () => {
    return availableTagsList.map((tag) => {
      return (
        <li key={tag}>
          <Button
            type="button"
            text={`# ${tag}`}
            value={`# ${tag}`}
            size="small"
            margin="m-0"
            onClick={handleOnAvailableTagsClick}
            color={
              clickedAvailableTags.includes(tag)
                ? "text-[#dcf836]"
                : "text-textMainColor hover:text-[#dcf836]"
            }
          />
        </li>
      );
    });
  };

  const renderCurrentUserTags = () => {
    return currentUserTagsList.map((tag) => {
      return (
        <li key={tag}>
          <Button
            type="button"
            text={`# ${tag}`}
            value={`# ${tag}`}
            size="small"
            margin="m-0"
            onClick={handleOnCurrentUserTagsClick}
            color={
              clickedCurrentUserTags.includes(tag)
                ? "text-[#dcf836]"
                : "text-textMainColor hover:text-[#dcf836]"
            }
          />
        </li>
      );
    });
  };

  // 태그 목록에서 태그 클릭 시 함수
  const handleOnAvailableTagsClick = (e) => {
    const clickedTag = e.currentTarget.value.slice(1).trim();
    if (clickedAvailableTags.includes(clickedTag)) {
      setClickedAvailableTags(
        clickedAvailableTags.filter((tag) => tag !== clickedTag)
      );
    } else {
      setClickedAvailableTags([...clickedAvailableTags, clickedTag]);
    }
  };

  const handleOnCurrentUserTagsClick = (e) => {
    const clickedTag = e.currentTarget.value.slice(1).trim();

    if (clickedCurrentUserTags.includes(clickedTag)) {
      setClickedCurrentUserTags(
        clickedCurrentUserTags.filter((tag) => tag !== clickedTag)
      );
    } else {
      setClickedCurrentUserTags([...clickedCurrentUserTags, clickedTag]);
    }
  };

  // 추가 버튼 클릭시 함수
  // TODO 에러처리 필요
  const handleOnAddTagsClick = async () => {
    if (clickedAvailableTags.length === 0) return;

    const response = await dispatch(
      actions.playlist.updatePlaylistTags({
        playlistId,
        tags: clickedAvailableTags,
      })
    );

    if (response === 204) {
      alert("태그 추가 성공");
      setAvailableTagsList(
        availableTagsList.filter((tag) => !clickedAvailableTags.includes(tag))
      );
      setCurrentUserTagsList([...currentUserTagsList, ...clickedAvailableTags]);
    }

    setClickedAvailableTags([]);
    setClickedCurrentUserTags([]);
  };

  // 제거 버튼 클릭시 함수
  const handleOnRemoveTagsClick = async () => {
    if (clickedCurrentUserTags.length === 0) return;

    const response = await dispatch(
      actions.playlist.deletePlaylistTags({
        playlistId,
        tags: clickedCurrentUserTags,
      })
    );

    if (response === 204) {
      alert("태그 삭제 성공");
      setCurrentUserTagsList(
        currentUserTagsList.filter(
          (tag) => !clickedCurrentUserTags.includes(tag)
        )
      );
      setAvailableTagsList([...availableTagsList, ...clickedCurrentUserTags]);
    }

    setClickedAvailableTags([]);
    setClickedCurrentUserTags([]);
  };

  useEffect(() => {
    getAvailableTags();
  }, []);

  //TODO 모달 닫힌 후 디테일 페이지에서 태그 목록 업데이트되어서 렌더링 되도록 처리 필요

  return (
    <aside
      className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
      onClick={handleOnTagListEditModalClose}
    >
      <div className="w-[600px] shadow-lg p-6 flex flex-col border-4 border-solid rounded-b border-[#0E2133] bg-[#0C1A2A]">
        <h2 className="mb-5 text-xl text-textMainColor">태그 목록 수정하기</h2>
        <section className="flex justify-between w-full gap-2 px-3">
          <div className="h-[400px] w-[230px] bg-[#233A50] rounded-md p-2">
            <h6 className=" text-textMainColor">전체 태그</h6>
            <ul className="max-h-[350px] flex flex-col items-center w-full py-4 overflow-y-scroll scrollbar">
              {renderAvailableTags()}
            </ul>
          </div>
          <div className="h-[400px] flex flex-col justify-center ">
            <Button
              type="button"
              text="추가 &nbsp; >  &nbsp; >"
              variant="contained"
              height="h-8"
              borderRadius="rounded-sm"
              backgroundColor="bg-[#233A50]"
              onClick={handleOnAddTagsClick}
            />
            <Button
              type="button"
              text="< &nbsp; < &nbsp; 제거"
              variant="contained"
              height="h-8"
              borderRadius="rounded-sm"
              backgroundColor="bg-[#233A50]"
              onClick={handleOnRemoveTagsClick}
            />
          </div>
          <div className="h-[400px] w-[230px] bg-[#233A50] rounded-md p-2">
            <h6 className=" text-textMainColor">나의 태그</h6>
            <ul className="max-h-[350px] flex flex-col items-center w-full py-4 overflow-y-scroll scrollbar">
              {renderCurrentUserTags()}
            </ul>
          </div>
        </section>
        <section className="flex mt-5 ml-auto">
          <Button
            variant="contained"
            text="완료"
            type="submit"
            width="w-20"
            margin="m-0"
            backgroundColor="bg-themePink"
            borderRadius="rounded-lg"
            onClick={handleOnTagListEditModalClose}
          />
        </section>
      </div>
    </aside>
  );
}

TagListEditModal.propTypes = {
  playlistId: PropTypes.string,
  setIsOpen: PropTypes.func,
  currentUserTags: PropTypes.array,
};
