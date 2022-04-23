import React from "react";
import PropTypes from "prop-types";
import StaticIcon from "@component/Icons/StaticIcon";
import { FaSearch } from "react-icons/fa";

export default function SearchBar(props) {
  const { size } = props;
  return (
    <div className="relative">
      <input
        type="search"
        name="search"
        placeholder="Search"
        className="w-3/12 h-10 max-w-sm px-5 pr-10 text-sm bg-white border-4 rounded-full sm:flex focus:outline-none"
      />
      <StaticIcon icon={FaSearch} size={"small"} color={"text-gray-200"} />
    </div>
  );
}

SearchBar.propTypes = {};
