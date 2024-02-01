import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import { Header } from "src/common/ui-kit/header";

const HomeRoot = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

type Props = {};

export const Home = ({}: Props) => {
  return (
    <HomeRoot>
      <div>
        <Header />
        <div></div>
      </div>
      <main></main>
    </HomeRoot>
  );
};
