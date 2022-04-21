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
        className="sm:flex w-3/12 max-w-sm bg-white h-10 px-5 pr-10 rounded-full border-4 text-sm focus:outline-none"
      />
      <StaticIcon icon={FaSearch} size={"small"} color={"text-gray-200"} />
    </div>
  );
}

SearchBar.propTypes = {};
