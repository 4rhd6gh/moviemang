import { useRoutes } from "react-router-dom";
import AuthLayout from "../Layouts/AuthLayout";
import PublicLayout from "../Layouts/PublicLayout";
import MainPage from "@page/main";
import MovieList from "@page/movieList/MovieList";
import MovieDetail from "@page/movieDetail";
import Search from "@page/search/Search";
import MyInfo from "@page/mypage/MyInfo";
import MyPlayList from "@page/mypage/MyPlayList";
import MyPlayListDetail from "@page/mypage/MyPlayListDetail";
import PlayListDetail from "@page/playListDetail";
import CreatePlayList from "@page/mypage/MyPlayList/CreatePlayList";
import EditPlayList from "@page/mypage/MyPlayList/EditPlayList";
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
      { path: "/search/:searchKeyword", element: <Search /> },
      { path: "/moviedetail/:movieId", element: <MovieDetail /> },
      { path: "/playlistdetail/:playlistId", element: <PlayListDetail /> },
      { path: "/login", element: <Login /> },
      { path: "/join", element: <Join /> },
      { path: "/oauth/kakao", element: <Kakao /> },
      { path: "/oauth/naver", element: <Naver /> },
      { path: "/nickname", element: <Nickname /> },
    ],
  };

  const authRoutes = {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/member", element: <MyInfo /> },
      { path: "/member/playlist", element: <MyPlayList /> },
      { path: "/member/playlist/create", element: <CreatePlayList /> },
      { path: "/member/playlist/edit/:playlistId", element: <EditPlayList /> },
      { path: "/member/playlist/:playlistId", element: <MyPlayListDetail /> },
    ],
  };
  const routing = useRoutes([publicRoutes, authRoutes]);

  return <>{routing}</>;
}
