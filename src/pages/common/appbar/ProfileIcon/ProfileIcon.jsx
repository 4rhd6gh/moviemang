import { useState } from "react";
import { BsPersonFill as PersonIcon } from "react-icons/bs";
import { RiArrowDownSFill as DownArrowIcon } from "react-icons/ri";
import ProfileDropDown from "./ProfileDropDown";

export default function ProfileIcon() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleToggleDropDown = () => {
    setIsDropDownOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer hover:text-textHighlightColor"
        onClick={handleToggleDropDown}
      >
        <PersonIcon className="w-8 h-8" />
        <DownArrowIcon className="" />
      </div>
      {isDropDownOpen && (
        <ProfileDropDown
          isDropDownOpen={isDropDownOpen}
          setIsDropDownOpen={setIsDropDownOpen}
        />
      )}
    </div>
  );
}
