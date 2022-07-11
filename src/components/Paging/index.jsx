import React, { useState } from "react";
import PropTypes from "prop-types";

const PAGE_DATA_LIMIT = 9;

export default function Paging(props) {
  const { totalCount, page, onChange } = props;
  console.log(totalCount);

  return (
    <div className=" w-full flex items-center justify-center border-t-[1px] border-b-[1px] border-solid border-[#405266]">
      <div className="">
        <div className=" text-[#4280bf] pl-5 pr-5" href="#">
          {Array.from(
            Array(Math.ceil(totalCount / PAGE_DATA_LIMIT)).keys()
          ).map((index) => {
            return (
              <a
                key={index}
                className={`${
                  index === page ? "text-[#bcf836]" : "text-gray-600"
                } pl-2 pr-2`}
                onClick={() => onChange(index)}
              >
                {index + 1}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Paging.propTypes = {
  totalCount: PropTypes.number,
  page: PropTypes.number,
  onChange: PropTypes.func,
};
