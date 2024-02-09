import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
import ListIcon from "@mui/icons-material/List";
import Chip from "@mui/material/Chip";

import {
  YourLibraryRoot,
  LibraryFilter,
  YourLibraryHeader,
  TitleButton,
} from "./YourLibrary.style";
import { LibraryItem } from "./@YourLibrary/LibraryItem";
import { LibraryItem as LibraryItemModel } from "./model/LibraryItem";
import { LibrarySkeleton } from "./@YourLibrary/LibrarySkeleton";

const LibraryItemRoot = styled(Stack)(({ theme }) => ({
  cursor: "pointer",
  padding: theme.spacing(2),
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

type Props = {
  loading: boolean;
  libraryList: LibraryItemModel[];
};

export const YourLibrary = ({ loading, libraryList }: Props) => {
  return (
    <YourLibraryRoot>
      <YourLibraryHeader>
        <TitleButton>
          <CollectionsBookmarkIcon />
          Your Library
        </TitleButton>

        <IconButton aria-label="add">
          <AddIcon />
        </IconButton>

        <IconButton aria-label="forward">
          <ArrowForwardIcon />
        </IconButton>
      </YourLibraryHeader>

      <LibraryFilter>
        <Chip label="Playlist" />
        <Chip label="Artist" />
        <Chip label="Albums" />
        <Chip label="Podcasts & Shows" />
      </LibraryFilter>

      <Stack flexDirection="row" justifyContent="space-between" mt={2}>
        <IconButton aria-label="search">
          <SearchIcon />
        </IconButton>

        <Button
          variant="text"
          endIcon={<ListIcon />}
          sx={{ fontSize: "0.875rem", fontWeight: 400 }}
        >
          Recents
        </Button>
      </Stack>
    </YourLibraryRoot>
  );
};
