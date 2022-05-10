import React from "react";
import { useRoutes } from "react-router-dom";
import AuthLayout from "../Layouts/AuthLayout";
import PublicLayout from "../Layouts/PublicLayout";
import MainPage from "../pages/main";
import MovieList from "../pages/movieList/MovieList";
import Search from "../pages/search/Search";

export default function CustomRoutes() {
  const publicRoutes = {
    path: "/",
    element: <PublicLayout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/movielist", element: <MovieList /> },
      { path: "/search", element: <Search /> },
    ],
  };

  const authRoutes = {
    path: "/",
    element: <AuthLayout />,
    children: [],
  };
  const routing = useRoutes([publicRoutes, authRoutes]);

  return <>{routing}</>;
}
