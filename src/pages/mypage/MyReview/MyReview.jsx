import React from "react";
import SNB from "../SNB";
import ReviewList from "./components/reviewList";
import { data } from "./data.js";
export default function MyReview() {
  return (
    <div className="flex w-[1170px] mx-auto">
      <div className="w-[20%]">
        <SNB />
      </div>

      <div className="w-[80%]">
        <div className="max-w-xl p-10 text-4xl font-bold text-white uppercase ">
          My Review
        </div>
        <ul className="pl-10">
          {data.data.reviewInfos.map((reviewData) => (
            <ReviewList
              key={reviewData.id}
              title={reviewData.title}
              review_content={reviewData.review_content}
              img_path_url={reviewData.img_path_url}
              mod_time={reviewData.mod_time}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
