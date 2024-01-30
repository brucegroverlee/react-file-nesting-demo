import { Components } from "@mui/material";

export const MuiChip: Components["MuiChip"] = {
  styleOverrides: {
    root: {
      backgroundColor: "#282828",
      cursor: "pointer",
      userSelect: "none",
      "&:hover": {
        backgroundColor: "#313131",
      },
    },
  },
};
