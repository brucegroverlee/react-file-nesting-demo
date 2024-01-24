import { Navigate } from "react-router-dom";
import Page404 from "../pages/errors/404";

export const ErrorRouter = [
  {
    path: "404",
    element: <Page404 />,
  },
  { path: "*", element: <Navigate to="404" replace /> },
];
