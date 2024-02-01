import Box from "@mui/material/Box";
import { ShortcutItem } from "./@Shortcuts/ShortcutItem";
import { Playlist } from "src/common/models/playlists/Playlist";

type Props = {
  shortcuts: Playlist[];
};

export const Shortcuts = ({ shortcuts }: Props) => (
  <Box
    component="section"
    display="grid"
    gridTemplateColumns="repeat(4, 1fr)"
    gap={2}
  >
    {shortcuts.map(({ title, imageUrl }) => (
      <ShortcutItem key={title} title={title} imageUrl={imageUrl} />
    ))}
  </Box>
);
