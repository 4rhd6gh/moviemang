/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import SearchBar from "@page/common/appbar/SearchBar";
import { BsFillPersonFill as ProfileIcon } from "react-icons/bs";
import { HiMenu as MenuIcon } from "react-icons/hi";
import Button from "@component/Button";
import JoinModal from "../modal/JoinModal";
import LoginModal from "../modal/LoginModal";
import { useNavigate } from "react-router-dom";

export default function Appbar(props) {
  const { scrollPosition } = props;
  const navigate = useNavigate();
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleJoinModalOpen = () => {
    setShowJoinModal((prevState) => !prevState);
  };

  const handleLoginModalOpen = () => {
    setShowLoginModal((prevState) => !prevState);
  };

  const moveMovieListPage = () => {
    navigate("/movieList");
  };

  return (
    <header
      className={`z-10 flex items-center justify-center w-full pt-5 pb-5 text-white
        bg-transparent h-28 md:fixed md:top-0 md:bg-headerBackgroundColor ${
          scrollPosition > 200
            ? "fixed top-0 bg-headerBackgroundColor ease duration-300 h-28 "
            : ""
        }`}
    >
      {/* 로고 및 검색바 부분 */}
      <div className="flex items-center h-20 w-[1170px] mr-auto ml-auto pr-10 pl-10 tablet:w-[970px] md:w-[600px] md:pr-0 md:pl-0 mobile:w-full mobile:pr-10 mobile:pl-10 mobile:min-w-[437px] ">
        {/* 로고 */}
        <div className="relative flex items-center">
          <div className="text-[70px] font-bold logo text-themePink flex items-center ">
            M
            <span className="mt-2 ml-[2px] text-4xl tracking-wider text-white">
              OVIEMAN
              <span className="text-themePink ml-[1px] text-4xl">G</span>
            </span>
          </div>
          <div className="absolute text-[70px] font-bold top-[-7px] left-[4px] logo text-themePink z-[-1] opacity-[0.5]">
            M
          </div>
        </div>
        <SearchBar />
        <div className="flex items-center mt-2 ml-auto font-bold tracking-widest text-l text-textMainColor nav_container md:hidden">
          <span className="ml-4 mr-4 cursor-pointer tablet:ml-2 tablet:mr-2 hover:text-textHighlightColor">
            PLAYLISTS
          </span>
          <span
            className="ml-4 mr-4 cursor-pointer tablet:ml-2 tablet:mr-2 hover:text-textHighlightColor "
            onClick={moveMovieListPage}
          >
            MOVIES
          </span>
          <span
            className="ml-4 mr-4 cursor-pointer tablet:ml-2 tablet:mr-2 hover:text-textHighlightColor"
            onClick={handleLoginModalOpen}
          >
            LOG IN
          </span>
          <Button
            text="JOIN"
            type="button"
            color="text-white"
            width="w-[80px]"
            height="h-[35px]"
            backgroundColor="bg-themePink"
            borderRadius="rounded-2xl"
            onClick={handleJoinModalOpen}
          ></Button>
        </div>
        <div className="flex ml-auto">
          <MenuIcon className="hidden w-[40px] h-[40px] p-[3px] border-2 mr-0 mt-2 md:block " />
        </div>
      </div>
      <LoginModal open={showLoginModal} onClose={setShowLoginModal} />
      <JoinModal open={showJoinModal} onClose={setShowJoinModal} />
    </header>
  );
}
