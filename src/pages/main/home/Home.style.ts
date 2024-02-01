import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";

export const HomeRoot = styled(Paper)({
  width: "100%",
  height: "100%",
});

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
