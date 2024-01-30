import { useContext } from "react";
import { PlayerBar } from "./PlayerBar";
import { PlayerBarContext } from "./model/PlayerBarContext";

export const PlayerBarController = () => {
  const { track } = useContext(PlayerBarContext);

  return <PlayerBar track={track} />;
};
