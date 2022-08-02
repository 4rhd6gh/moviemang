import React from "react";

import * as Mock from "@data/mock";

export default function Reviews() {
  const reviews = Mock.ReviewDatas.reviews;
  return (
    <div className="w-[700px]">
      {reviews.map((review, index) => {
        return (
          <div
            className="flex flex-col p-3 border-b-[1px] border-[#4280bf]"
            key={index}
          >
            <div className="text-xl text-[#abb7c4]">{review.title}</div>
            <div>
              <span className="text-xs text-[#abb7c4]">{review.date}</span>
              <span className="text-xs text-[#abb7c4] ml-4">by</span>
              <span className="text-xs text-[#4280bf] ml-1">{review.name}</span>
            </div>
            <div className="text-sm text-gray-500">{review.comment}</div>
          </div>
        );
      })}
    </div>
  );
}
