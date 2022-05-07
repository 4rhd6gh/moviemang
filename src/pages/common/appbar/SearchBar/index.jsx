import React, { useState } from "react";
import StaticIcon from "@component/Icons/StaticIcon";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setValue(e.currentTarget.value);
  };
  const handleClick = () => {
    navigate("/search", {
      state: { value: value },
    });
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      navigate("/search", {
        state: { value: value },
      });
    }
  };

  return (
    <div className="relative mt-[10px] ml-10 w-[350px]  tablet:w-[220px] tablet:ml-6 md:hidden  mobile:hidden">
      <input
        type="search"
        name="search"
        placeholder="보고 싶은 영화를 찾아보세요"
        value={value}
        className="w-full h-10 px-5 pr-10 text-sm rounded-full text-textMainColor bg-searchBarBackgroundColor focus:outline-none"
        onChange={handleSearch}
        onKeyPress={handleEnter}
      />
      <div className="absolute top-2 right-4" onClick={handleClick}>
        <StaticIcon icon={FaSearch} size={"small"} color={"text-gray-200"} />
      </div>
    </div>
  );
}
