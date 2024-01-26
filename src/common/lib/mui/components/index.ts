import { Components, Theme } from "@mui/material";
import { MuiButton } from "./MuiButton";
import { MuiChip } from "./MuiChip";
import { MuiIconButton } from "./MuiIconButton";
import { MuiPaper } from "./MuiPaper";

export const components: Components<Omit<Theme, "components">> = {
  MuiButton,
  MuiChip,
  MuiIconButton,
  MuiPaper,
};
