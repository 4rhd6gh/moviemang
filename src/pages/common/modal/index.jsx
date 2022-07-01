import React, { useEffect, useState } from "react";
import Button from "@component/Button";
import PropTypes from "prop-types";
import * as apis from "@service/apis/movieMang";

export default function Modal(props) {
  const { open, movieInfo, onClose, crew = [], callback } = props;
  const [arrPlaylist, setArrPlaylist] = useState([]);
  async function createPlMovies(playlistId) {
    const mvDirector = crew.find((item) => item.job === "Director")?.name;
    try {
      const response = await apis.requestAxios(
        "post",
        `/myplaylist/movie`,
        {},
        {
          playlistId,
          mvTitle: movieInfo.mvTitle,
          mvPosterPath: movieInfo.mvPosterPath,
          mvDirector,
        }
      );
      console.log(response);
      if (response.status === 200) {
        return response.status;
      } else {
        return response.status;
      }
    } catch (err) {}
  }
  const onCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      onClose(false);
    }
  };
  async function getPlayList() {
    let response;
    try {
      response = await apis.requestAxios("get", "/myplaylist/playlist");
    } catch (err) {
      console.log(err);
    }

    setArrPlaylist(response.data.playList);
  }
  useEffect(() => {
    getPlayList();
  }, []);
  return (
    <>
      {open ? (
        <>
          <div
            className="fixed inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none z-90 focus:outline-none"
            onClick={onCloseModal}
          >
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div className="flex items-center justify-center p-5 border-b border-solid rounded-t border-slate-200">
                  <div>
                    <h1 className="text-2xl font-semibold text-gray-900 ">
                      PlayList
                    </h1>
                    <div className="text-xs italic text-gray-900">
                      영화를 담을 플레이리스트를 선택하세요.
                    </div>
                    <ol className="mt-4 ">
                      {arrPlaylist.map((item) => {
                        return (
                          <>
                            <li
                              key={item.playlistId}
                              onClick={() => createPlMovies(item.playlistId)}
                              className="px-4 py-2 text-sm font-bold leading-5 text-black cursor-pointer hover:italic hover:text-gray-900"
                            >
                              {item.playlistTitle}
                            </li>
                            <div className="border-b-2 border-black border-solid"></div>
                          </>
                        );
                      })}
                    </ol>
                  </div>
                </div>
                <div className="flex items-center justify-center p-6 border-t border-solid rounded-b border-slate-200">
                  <Button
                    variant="contained"
                    text="확인"
                    type="button"
                    onClick={onCloseModal}
                    width="w-20"
                    backgroundColor="bg-themePink"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  moiveInfo: PropTypes.object,
  onClose: PropTypes.func,
};
