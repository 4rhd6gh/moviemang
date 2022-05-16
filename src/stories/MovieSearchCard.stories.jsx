import React from "react";
import MovieSearchCard from "@page/search/components/movieSearchCard";

export default {
  title: "Search/MovieSearchCard",
  component: MovieSearchCard,
  argTypes: {
    poster_path: { control: "text" },
    title: { control: "text" },
    overview: { control: "text" },
    release_date: { control: "text" },
  },
};

const Template = (args) => <MovieSearchCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: "캡틴마블",
  poster_path:
    "https://image.tmdb.org/t/p/original/2JO8X8aT97BwxMMGr9ChrCl4xGQ.jpg",
  overview:
    "외계 크리 문명의 수도 할리, 캐롤 댄버스은 압도적인 능력을 가진 전사다. 그는 멘토 욘 로그로부터 힘을 통제하고 과거의 기억은 묻어야 한다는 가르침을 받고 있다. 그러던 어느 날, 변방 행성 토르파에서 스크럴 종족에게 붙잡혀 뇌를 스캔당한 캐롤은 과거 자신이 낯선 행성의 파일럿이었음을 알게 된다. 스크럴을 따돌리고 탈출하는 과정에서 공교롭게 C-53 행성, 즉 지구에 불시착한 캐롤. 우여곡절 끝에 쉴드 신참 요원 닉 퓨리에게 발견되어 팀을 이룬 그들은 지구로 향하는 더 큰 위협을 감지하고 힘을 합쳐 전쟁을 끝내야 하는데...",
  release_date: "2022-05-06",
};
