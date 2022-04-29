import React from "react";
import StaticIcon from "@component/Icons/StaticIcon";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="relative mt-2 ml-10 w-[400px] tablet:w-[220px] mobile:hidden">
      <input
        type="search"
        name="search"
        placeholder="보고 싶은 영화를 찾아보세요"
        className="w-full h-10 px-5 pr-10 text-sm rounded-full text-textMainColor bg-searchBarBackgroundColor focus:outline-none"
      />
      <div className="absolute top-2 right-4">
        <StaticIcon icon={FaSearch} size={"small"} color={"text-gray-200"} />
      </div>
    </div>
  );
}
