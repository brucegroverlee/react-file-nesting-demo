import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";

export const HomeFilter = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(2),
  padding: theme.spacing(3),
}));

export const FilterChip = styled(Chip)(({ theme }) => ({
  "&.active": {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
}));

export const HomeMain = styled("main")(({ theme }) => ({
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
}));
