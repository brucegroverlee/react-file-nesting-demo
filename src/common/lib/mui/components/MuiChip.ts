import { Components } from "@mui/material";

export const MuiChip: Components["MuiChip"] = {
  styleOverrides: {
    root: {
      backgroundColor: "#282828",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#313131",
      },
    },
  },
};
