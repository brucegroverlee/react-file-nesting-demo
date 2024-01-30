import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

export const Player = () => (
  <Box width="40%">
    <Stack flexDirection="row" justifyContent="center" alignItems="center">
      <IconButton>
        <ShuffleIcon />
      </IconButton>
      <IconButton>
        <SkipPreviousIcon />
      </IconButton>
      <IconButton size="large">
        <PlayCircleIcon fontSize="inherit" />
      </IconButton>
      <IconButton>
        <SkipNextIcon />
      </IconButton>
      <IconButton>
        <RepeatIcon />
      </IconButton>
    </Stack>

    <Stack
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      gap={2}
    >
      <Typography variant="caption">0:58</Typography>
      <LinearProgress
        variant="determinate"
        color="inherit"
        value={30}
        sx={{ width: "100%" }}
      />
      <Typography variant="caption">3:00</Typography>
    </Stack>
  </Box>
);
