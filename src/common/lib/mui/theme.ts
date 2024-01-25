import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";
import { components } from "./components";

export const theme = createTheme({
  spacing: [0, 4, 8, 16, 32, 64],
  shape: {
    borderRadius: 8,
  },
  palette,
  components,
});
