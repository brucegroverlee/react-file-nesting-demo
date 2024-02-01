import { useContext } from "react";
import { Header } from "./Header";
import { AuthenticationContext } from "src/common/lib/authentication";

export const HeaderController = () => {
  const { user } = useContext(AuthenticationContext);

  return <Header profilePicture={user?.profilePicture ?? null} />;
};
