import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export const YourLibraryRoot = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2, 3),
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
}));

export const YourLibraryHeader = styled("header")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  gap: theme.spacing(2),
}));

export const TitleButton = styled(Button)(({ theme }) => ({
  gap: theme.spacing(2),
  marginInlineEnd: "auto",
}));

export const LibraryFilter = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  marginTop: theme.spacing(3),
}));
