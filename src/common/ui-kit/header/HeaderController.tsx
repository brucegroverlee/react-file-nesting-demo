import { useContext } from "react";
import { Header } from "./Header";
import { Props as SearchProps } from "./@Header/SeachForm";
import { AuthenticationContext } from "src/common/lib/authentication";

type Props = {
  search?: SearchProps;
};

export const HeaderController = ({ search }: Props) => {
  const { user } = useContext(AuthenticationContext);

  return (
    <Header profilePicture={user?.profilePicture ?? null} search={search} />
  );
};
