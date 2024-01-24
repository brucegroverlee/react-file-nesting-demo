import { createBrowserRouter } from "react-router-dom";

import { MainRouter } from "./main-router";
import { ErrorRouter } from "./ErrorRouter";

export const AppRouter = createBrowserRouter([...MainRouter, ...ErrorRouter]);
