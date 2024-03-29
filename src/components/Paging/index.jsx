import React from "react";
import PropTypes from "prop-types";

const PAGE_DATA_LIMIT = 9;

export default function Paging(props) {
  const { totalCount, page, onChange } = props;

  return (
    <div className=" w-full flex items-center justify-center border-t-[1px] border-b-[1px] border-solid border-[#405266]">
      <div className="">
        <div className=" text-[#4280bf] pl-5 pr-5" href="#">
          {totalCount !== 0
            ? Array.from(
                Array(Math.ceil(totalCount / PAGE_DATA_LIMIT)).keys()
              ).map((index) => {
                return (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a
                    key={index}
                    className={`${
                      index === page ? "text-[#bcf836]" : "text-gray-600"
                    } pl-2 pr-2 cursor-pointer`}
                    onClick={() => onChange(index)}
                  >
                    {index + 1}
                  </a>
                );
              })
            : null}
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
