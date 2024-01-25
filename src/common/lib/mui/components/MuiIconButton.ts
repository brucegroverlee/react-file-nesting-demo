import { Components } from "@mui/material";

export const MuiIconButton: Components["MuiIconButton"] = {
  styleOverrides: {
    root: {
      color: "#a7a7a7",
      "&:hover": {
        color: "#ffffff",
        backgroundColor: "#1a1a1a",
      },
    },
  },
};
