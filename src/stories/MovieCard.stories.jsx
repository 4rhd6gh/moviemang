import React from "react";
import MovieCard from "@page/movieList/components/movieCard";
import * as Constants from "@constant";

export default {
  title: "MovieList/MovieCard",
  component: MovieCard,
  argTypes: {
    poster_path: { control: "text" },
    title: { control: "text" },
    vote_average: { control: "number" },
    release_date: { control: "text" },
    onClick: { action: "clicked" },
  },
  parameters: {
    docs: {
      description: {
        component: "MovieList 화면에서 쓰는 MovieCard 컴포넌트 입니다.",
      },
    },
  },
};
const Template = (args) => (
  <div>
    <MovieCard {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  poster_path:
    "https://image.tmdb.org/t/p/original" + "/bCz71ysciwNL2xddSm25ufrgZ7V.jpg",
  title: "더 배트맨",
  vote_average: 7.8,
  release_date: "2022-04-12",
};
