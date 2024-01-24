import { styled } from "@mui/material/styles";

const PlayerBarRoot = styled("div")(({ theme }) => ({
  gridArea: "playing-bar",
}));

export const PlayerBar = () => {
  return <PlayerBarRoot>Player</PlayerBarRoot>;
};
