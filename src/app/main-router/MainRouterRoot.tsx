import { Outlet } from "react-router-dom";
import { Layout } from "./Layout";

export const MainRouterRoot = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
