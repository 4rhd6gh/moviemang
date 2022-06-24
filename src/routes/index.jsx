import { useRoutes } from "react-router-dom";

import AuthLayout from "../Layouts/AuthLayout";
import PublicLayout from "../Layouts/PublicLayout";
import MainPage from "../pages/main";
import MovieList from "../pages/movieList/MovieList";
import MovieDetail from "@page/movieDetail";
import Search from "../pages/search/Search";
import MyInfo from "../pages/mypage/MyInfo";
import MyPlayList from "../pages/mypage/MyPlayList";
import MyReview from "../pages/mypage/MyReview";
import PlayListDetail from "../pages/myPlayLists/PlayListDetail";
import Login from "@page/auth/Login";
import Join from "@page/auth/Join";
import Nickname from "@page/auth/Nickname";
import Kakao from "@page/auth/Kakao";
import Naver from "@page/auth/Naver";

export default function CustomRoutes() {
  const publicRoutes = {
    path: "/",
    element: <PublicLayout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/movielist", element: <MovieList /> },
      { path: "/search", element: <Search /> },
      { path: "/moviedetail/:movieId", element: <MovieDetail /> },
      { path: "/playlistdetail", element: <PlayListDetail /> },
      { path: "/login", element: <Login /> },
      { path: "/join", element: <Join /> },
    ],
  };

  const authRoutes = {
    path: "/",

    element: <AuthLayout />,
    children: [
      { path: "/member", element: <MyInfo /> },
      { path: "/member/playlist", element: <MyPlayList /> },
      { path: "/member/review", element: <MyReview /> },
      { path: "/oauth/kakao", element: <Kakao /> },
      { path: "/oauth/naver", element: <Naver /> },
      { path: "/nickname", element: <Nickname /> },
    ],
  };
  const routing = useRoutes([publicRoutes, authRoutes]);

  return <>{routing}</>;
}
