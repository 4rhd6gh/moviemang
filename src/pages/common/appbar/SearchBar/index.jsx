import React from "react";
import StaticIcon from "@component/Icons/StaticIcon";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="relative ml-48 w-96">
      <input
        type="search"
        name="search"
        placeholder="Search"
        className="w-full h-10 px-5 pr-10 text-sm bg-white border-2 rounded-full focus:outline-none"
      />
      <div className="absolute top-2 right-4">
        <StaticIcon icon={FaSearch} size={"small"} color={"text-gray-200"} />
      </div>
    </div>
  );
}
