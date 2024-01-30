import { styled } from "@mui/material/styles";
import { TrackInformation } from "./@PlayerBar/TrackInformation";
import { Player } from "./@PlayerBar/Player";
import { ButtonGroup } from "./@PlayerBar/ButtonGroup";
import { PlayerTrack } from "./model/PlayerTrack";

const PlayerBarRoot = styled("footer")({
  gridArea: "playing-bar",
  display: "flex",
  flexDirection: "row",
});

type Props = {
  track: PlayerTrack | null;
};

export const PlayerBar = ({ track }: Props) => {
  return (
    <PlayerBarRoot>
      <TrackInformation track={track} />
      <Player />
      <ButtonGroup />
    </PlayerBarRoot>
  );
};
