import React from "react";
import MovieCard from "@page/common/movieCard";
import * as Constants from "@constant";

export default {
  title: "Common/MovieCard", //components 폴더 아래 폴더명을 시작으로 jsx 파일명까지를 title로 표시
  component: MovieCard,
  argTypes: {
    poster: { control: "text" },
    title: { control: "text" },
    date: { control: "text" },
  },
  parameters: {
    docs: {
      description: {
        component: "공통적으로 사용되는 movie Card 컴포넌트입니다.",
      },
    },
  },
};
const Template = (args) => <MovieCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  poster: Constants.TM_MOVIE_IMAGE_URL + "/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
  title: "스파이더맨",
  date: "2019-06-28",
};
