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

  const handleOnTitleInputChange = (e) => {
    setPlayListTitle(e.currentTarget.value);
  };

  const handleOnDescriptionTextAreaChange = (e) => {
    setPlayListDescription(e.currentTarget.value);
  };

  const getCurrentPlayListDetail = async () => {
    dispatch(actions.common.startLoading);

    const response = await apis.requestAxios(
      "get",
      `/myplaylist/playlist/${playlistId}`
    );

    if (response.status === 200) {
      dispatch(actions.common.endLoading);
      setPlayListTitle(response.data.playList.playlistTitle);
      setPlayListDescription(response.data.playList.playlistDesc);
    } else {
      // TODO 에러처리
      dispatch(actions.common.endLoading);
    }
  };

  const handleOnPlayListContentsEditFormSubmit = async (e) => {
    e.preventDefault();

    const response = await dispatch(
      actions.playlist.editPlaylistContents({
        playlistId: playlistId,
        playlistTitle: playlistTitle,
        playlistDesc: playlistDescription,
      })
    );

    //TODO 에러처리
    //TODO 성공에 따른 피드백 수정(임시로 alert 문 처리 해두었습니다.)
    if (response === 204) {
      alert("내용 수정 성공");
      navigate(`/member/playlist/${playlistId}`);
    }
  };

  const handleOnCancelClick = () => {
    navigate(`/member/playlist/${playlistId}`);
  };

  useEffect(() => {
    getCurrentPlayListDetail();
  }, []);

  return (
    <main className="flex justify-center w-full">
      <div className="flex flex-col justify-center w-[60%] p-10 border-4 border-solid rounded-b border-[#0E2133] bg-[#0C1A2A] ">
        <h2 className="mb-5 text-xl text-textMainColor">
          플레이리스트 수정하기
        </h2>
        <div className="flex flex-col justify-center mt-5">
          <form
            id="playlistForm"
            onSubmit={handleOnPlayListContentsEditFormSubmit}
            className="relative"
          >
            <div className="relative">
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
              <label
                htmlFor="titleInput"
                className="absolute text-white transition-all left-3 top-3 peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-valid:-top-6 peer-valid:left-0 peer-valid:text-sm"
              >
                제목
              </label>
            </div>
            <div className="relative mt-4">
              <textarea
                row={10}
                placeholder={playlistDescription}
                value={playlistDescription}
                onChange={handleOnDescriptionTextAreaChange}
                required
                className="mt-4 w-full p-3 mb-3 bg-[#233A50] text-textMainColor rounded-lg h-40 resize-none focus:outline-none peer"
              />
              <label
                htmlFor="descriptionTextArea"
                className="absolute text-white transition-all left-3 top-6 peer-focus:-top-2 peer-focus:left-0 peer-focus:text-sm peer-valid:-top-2 peer-valid:left-0 peer-valid:text-sm"
              >
                상세 설명
              </label>
            </div>
            <div className="flex flex-row-reverse mt-3">
              <Button
                variant="contained"
                form="playlistForm"
                text="완료"
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
                onClick={handleOnCancelClick}
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
