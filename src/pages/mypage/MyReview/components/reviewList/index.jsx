import React from "react";
import PropTypes from "prop-types";
import StaticIcon from "@component/Icons/StaticIcon";
import { AiOutlineDelete } from "react-icons/ai";

export default function ReviewList(props) {
  const { title, review_content, img_path_url, mod_time } = props;

  function onClick(e) {}

  return (
    <li className="flex flex-row w-full py-5 ">
      <img
        src={img_path_url}
        alt={title}
        className="w-1/6 object-cover h-[130px] w-[90px] cursor-pointer"
      />
      <div className="relative w-5/6 h-[130px] px-5 mx-5 border-l border-gray-500 border-solid">
        <div className="flex items-center">
          <h2 className="text-gray-400">{title}</h2>
          <div className="ml-auto">
            <StaticIcon
              icon={AiOutlineDelete}
              size="small"
              color="text-white"
              onClick={onClick}
            />
          </div>
        </div>

        <p className="mt-2 text-white h-[60px]">{review_content}</p>

        <p className="float-right	text-sm text-gray-400 fle">{mod_time}</p>
      </div>
    </li>
  );
}

ReviewList.propTypes = {
  title: PropTypes.string.isRequired,
  review_content: PropTypes.string,
  img_path_url: PropTypes.string,
  mod_time: PropTypes.string,
};
