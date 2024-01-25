import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const LibraryMenuHeader = styled("header")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  gap: theme.spacing(2),
}));

const TitleButton = styled(Button)(({ theme }) => ({
  gap: theme.spacing(2),
  marginInlineEnd: "auto",
}));

export const LibraryMenu = () => {
  return (
    <Paper sx={{ px: 3, py: 2 }}>
      <LibraryMenuHeader>
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
      </LibraryMenuHeader>
    </Paper>
  );
};
