/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import { MainRouterRoot } from "./MainRouterRoot";

const HomePage = lazy(() => import("../../pages/main/home"));
const SearchPage = lazy(() => import("../../pages/main/search/index"));

export const MainRouter: RouteObject[] = [
  {
    path: "/",
    element: <MainRouterRoot />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "search",
        children: [
          {
            index: true,
            element: <SearchPage />,
          },
          {
            path: ":term",
            element: <div>Search term</div>,
          },
        ],
      },
      {
        path: "playlist/:playlistId",
        element: <div>Playlist Id</div>,
      },
      {
        path: "artist",
        children: [
          {
            path: ":artistId",
            element: <div>Artist</div>,
          },
          {
            path: ":artistId/discography/all",
            element: <div>Discography</div>,
          },
        ],
      },
    ],
  },
];
