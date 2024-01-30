import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import SpeakerIcon from "@mui/icons-material/Speaker";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import TabIcon from "@mui/icons-material/Tab";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import LinearProgress from "@mui/material/LinearProgress";

export const ButtonGroup = () => (
  <Stack
    flexDirection="row"
    justifyContent="flex-end"
    alignItems="center"
    width="30%"
  >
    <IconButton size="small">
      <SlideshowIcon fontSize="small" />
    </IconButton>
    <IconButton size="small">
      <KeyboardVoiceIcon fontSize="small" />
    </IconButton>
    <IconButton size="small">
      <QueueMusicIcon fontSize="small" />
    </IconButton>
    <IconButton size="small">
      <SpeakerIcon fontSize="small" />
    </IconButton>
    <IconButton size="small">
      <VolumeUpIcon fontSize="small" />
    </IconButton>

    <LinearProgress
      variant="determinate"
      color="inherit"
      value={100}
      sx={{ width: 80 }}
    />

    <IconButton size="small">
      <TabIcon fontSize="small" />
    </IconButton>
    <IconButton size="small">
      <OpenInFullIcon fontSize="small" />
    </IconButton>
  </Stack>
);
