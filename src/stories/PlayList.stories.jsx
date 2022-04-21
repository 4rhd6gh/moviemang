import React from "react";
import PlayListCard from "@page/common/playListCard";
import { FaUserCircle } from "react-icons/fa";

export default {
  title: "Common/PlayListCard", //components 폴더 아래 폴더명을 시작으로 jsx 파일명까지를 title로 표시
  component: PlayListCard,
  argTypes: {
    title: { control: "text" },
    id: { control: "text" },
    image: { control: "text" },
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
  image: "https://image.tmdb.org/t/p/original/bCz71ysciwNL2xddSm25ufrgZ7V.jpg",
  likeCount: 20,
  movieCount: 12,
  tagArray: ["액션", "모험", "애니메이션"],
};
