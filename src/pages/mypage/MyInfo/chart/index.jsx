import React from "react";
import { data } from "../../data";

export default function Chart() {
  const playList = data.data.playlist;
  const tagList = playList.reduce(function (accumulator, currentValue) {
    return [...accumulator, ...currentValue.tags];
  }, []);
  const tags = [];
  tagList.forEach((tag) => {
    let id = tags.findIndex((obj) => obj.name === tag.name);
    if (id === -1) {
      tags.push({ name: tag.name, count: 1, percent: 0 });
    } else {
      tags[id].count++;
    }
  });
  tags.map((tag, i) => {
    tags[i].percent = (tags[i].count / tagList.length) * 100;
    return tag;
  });

  return (
    <div className="w-full mx-auto">
      <h1 className="text-xl mb-2 font-bold text-l text-textMainColor">
        나의 플레이리스트 태그 통계
      </h1>
      <div className="flex flex-col">
        {tags.map((tag, i) => (
          <div key={i} className="flex mb-1">
            <div className="text-white w-20">#{tag.name}</div>
            <div className="my-auto bg-gray-600 w-full">
              <div className={`h-1 bg-pink-400 w-[${tag.percent}%]`} />
            </div>
            <div className="text-white pl-3">{tag.percent}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}
