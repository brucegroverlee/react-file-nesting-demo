import { Home } from "./Home";
import { useHome } from "./model/useHome";

export const HomeController = () => {
  const { isLoading, shortcuts } = useHome();

  return <Home loading={isLoading} shortcuts={shortcuts} />;
};
