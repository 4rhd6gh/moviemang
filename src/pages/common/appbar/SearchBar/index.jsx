import React from "react";
import PropTypes from "prop-types";
import StaticIcon from "@component/Icons/StaticIcon";
import { FaSearch } from "react-icons/fa";

export default function SearchBar(props) {
  return (
    <div className="relative w-96 ml-48">
      <input
        type="search"
        name="search"
        placeholder="Search"
        className="w-full bg-white h-10 px-5 pr-10 rounded-full border-2 text-sm focus:outline-none"
      />
      <div className="absolute top-2 right-4">
        <StaticIcon icon={FaSearch} size={"small"} color={"text-gray-200"} />
      </div>
    </div>
  );
}

SearchBar.propTypes = {};
