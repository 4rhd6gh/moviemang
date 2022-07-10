import React, { useState } from "react";
import StaticIcon from "@component/Icons/StaticIcon";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Input from "@component/Input";
import Button from "@component/Button";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleChangeSearch = (e) => {
    setValue(e.currentTarget.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (value === "") return;

    navigate("/search/" + value);
    setValue("");
  };

  return (
    <div className="relative mt-[10px] ml-10 w-[350px]  tablet:w-[220px] tablet:ml-6 md:hidden  mobile:hidden">
      <form id="searchForm" onSubmit={handleFormSubmit}>
        <Input
          type="search"
          value={value}
          placeholder="보고 싶은 영화를 찾아보세요"
          width="w-full"
          padding="px-5 py-2 pr-10"
          margin="mr-3"
          borderRadius="rounded-full"
          border="border-solid border border-slate-400"
          textColor="text-textMainColor"
          backgroundColor="bg-searchBarBackgroundColor"
          onChange={handleChangeSearch}
        />

        <div className="absolute top-2 right-4 ">
          <Button
            type="submit"
            form="searchForm"
            width="w-6"
            height="h-6"
            margin="m-0"
            text={
              <StaticIcon
                icon={FaSearch}
                size={"small"}
                color={"text-gray-200"}
              />
            }
          ></Button>
        </div>
      </form>
    </div>
  );
}
