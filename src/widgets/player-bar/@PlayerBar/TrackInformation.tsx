import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PlayerTrack } from "../model/PlayerTrack";

type Props = {
  track: PlayerTrack | null;
};

export const TrackInformation = ({ track }: Props) => (
  <Stack flexDirection="row" width="30%" p={2}>
    <Box component="img" src={track?.album?.coverUrl} />

    <Stack justifyContent="center" alignItems="flex-start" ml={3}>
      <Typography>{track?.song?.title}</Typography>
      <Typography variant="caption">{track?.artist?.name}</Typography>
    </Stack>
  </Stack>
);
