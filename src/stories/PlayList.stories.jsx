import React from "react";
import PlayListCard from "@page/common/playListCard";

export default {
  title: "Common/PlayListCard", //components 폴더 아래 폴더명을 시작으로 jsx 파일명까지를 title로 표시
  component: PlayListCard,
  argTypes: {
    title: { control: "text" },
    id: { control: "text" },
    imageArray: { control: "array" },
    likeCount: { control: "number" },
    movieCount: { control: "number" },
    tagArray: { control: "array" },
    onClick: { action: "clicked" },
  },
  parameters: {
    docs: {
      description: {
        component: "공통적으로 사용되는 playList Card 컴포넌트입니다.",
      },
    },
  },
};
const Template = (args) => <PlayListCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: "마블 액션의 진수를 느낄 수 있는 영화모음",
  id: "jjinho28",
  imageArray: [
    "https://image.tmdb.org/t/p/original/bCz71ysciwNL2xddSm25ufrgZ7V.jpg",
  ],
  likeCount: 20,
  movieCount: 12,
  tagArray: ["액션", "모험", "애니메이션"],
};

export const TwoImageList = Template.bind({});

TwoImageList.args = {
  id: "jjinho28",
  title: "마블 액션의 진수를 느낄 수 있는 영화모음",
  imageArray: [
    "https://image.tmdb.org/t/p/original" + "/bCz71ysciwNL2xddSm25ufrgZ7V.jpg",
    "https://image.tmdb.org/t/p/original" + "/qcOFxYpBvU8LwaMyKdjCoP7y7we.jpg",
  ],
  likeCount: 20,
  movieCount: 12,
  tagArray: ["액션", "모험", "애니메이션"],
};

export const ThreeImageList = Template.bind({});

ThreeImageList.args = {
  id: "xij38",
  title: "양조위 배우의 간지 작살나는 모음집",
  imageArray: [
    "https://image.tmdb.org/t/p/original" + "/okNgwtxIWzGsNlR3GsOS0i0Qgbn.jpg",
    "https://image.tmdb.org/t/p/original" + "/A7tmTT5cqcmJ2wUgZHvmombf2oA.jpg",
    "https://image.tmdb.org/t/p/original" + "/zzXFM4FKDG7l1ufrAkwQYv2xvnh.jpg",
  ],
  likeCount: 20,
  movieCount: 12,
  tagArray: ["액션", "모험", "애니메이션"],
};

export const SixImageList = Template.bind({});

SixImageList.args = {
  id: "dlj398",
  title: "심심풀이 땅콩 시간 죽이기 좋은 영화 모음집",
  imageArray: [
    "https://image.tmdb.org/t/p/original" + "/A7tmTT5cqcmJ2wUgZHvmombf2oA.jpg",
    "https://image.tmdb.org/t/p/original" + "/aNtAP8ZzUMdnCPoqYgVOcgI0Eh4.jpg",
    "https://image.tmdb.org/t/p/original" + "/rqyVJKWCZCWwYK5eDVYyo0jauN6.jpg",
    "https://image.tmdb.org/t/p/original" + "/r97txZRmBb75SGsIAWqmplWJnO3.jpg",
    "https://image.tmdb.org/t/p/original" + "/xe8dVB2QiCxLWFV77V4dpZcOvYB.jpg",
    "https://image.tmdb.org/t/p/original" + "/m2FNRngyJMyxLatBMJR8pbeG2v.jpg",
  ],
  likeCount: 20,
  movieCount: 12,
  tagArray: ["액션", "모험", "애니메이션"],
};
