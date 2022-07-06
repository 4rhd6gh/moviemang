import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import * as action from "@data/rootActions";
import useOnClickOutside from "@hook/useOnClickOutside.hook";

export default function ProfileDropDown({ isDropDownOpen, setIsDropDownOpen }) {
  const dropDownRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnMyPageClick = () => {
    setIsDropDownOpen(false);
    navigate("/member");
  };

  const handleOnLogoutClick = () => {
    dispatch(action.user.logout(navigate));
  };

  useOnClickOutside(dropDownRef, () => setIsDropDownOpen(false));

  return (
    <ul
      className="absolute flex flex-col left-[-20px] gap-3 p-4 text-sm text-center rounded-md w-28 bg-profileDropDownBackgroundColor top-10"
      ref={dropDownRef}
    >
      <li
        className="cursor-pointer hover:text-textHighlightColor"
        onClick={handleOnMyPageClick}
      >
        마이페이지
      </li>
      <li
        className="cursor-pointer hover:text-textHighlightColor"
        onClick={handleOnLogoutClick}
      >
        로그아웃
      </li>
    </ul>
  );
}
