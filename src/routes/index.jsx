import { useRoutes } from "react-router-dom";

import AuthLayout from "../Layouts/AuthLayout";
import PublicLayout from "../Layouts/PublicLayout";
import MainPage from "../pages/main";
import MovieList from "../pages/movieList/MovieList";
import MovieDetail from "@page/movieDetail";
import Search from "../pages/search/Search";
import MyPage from "../pages/mypage/MyPage";
import MyPlayLists from "../pages/myPlayLists";
import PlayListDetail from "../pages/myPlayLists/PlayListDetail";
import MyInfo from "../pages/mypage/MyInfo";
import MyPlayList from "../pages/mypage/MyPlayList";
import MyReview from "../pages/mypage/MyReview";

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
    ],
  };

  const authRoutes = {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/mypage", element: <MyPage /> },
      { path: "myplaylists", element: <MyPlayLists /> },
      { path: "/member", element: <MyInfo /> },
      { path: "/member/playlist", element: <MyPlayList /> },
      { path: "/member/review", element: <MyReview /> },
    ],
  };
  const routing = useRoutes([publicRoutes, authRoutes]);

  return <>{routing}</>;
}
