import React from "react";
import { useRoutes } from "react-router-dom";
import AuthLayout from "../Layouts/AuthLayout";
import PublicLayout from "../Layouts/PublicLayout";
import MainPage from "../pages/main";
import MovieList from "../pages/movieList/MovieList";
import MovieDetail from "@page/movieDetail";
import Search from "../pages/search/Search";
import MyPage from "../pages/mypage/MyPage";
import MyPlayLists from "../pages/myPlayLists";

export default function CustomRoutes() {
  const publicRoutes = {
    path: "/",
    element: <PublicLayout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/movielist", element: <MovieList /> },
      { path: "/search", element: <Search /> },
      { path: "/moviedetail/:movieId", element: <MovieDetail /> },
    ],
  };

  const authRoutes = {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/mypage", element: <MyPage /> },
      { path: "myplaylists", element: <MyPlayLists /> },
    ],
  };
  const routing = useRoutes([publicRoutes, authRoutes]);

  return <>{routing}</>;
}
