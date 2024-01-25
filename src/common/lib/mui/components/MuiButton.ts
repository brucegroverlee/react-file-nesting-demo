import { Components } from "@mui/material";

export const MuiButton: Components["MuiButton"] = {
  styleOverrides: {
    root: {
      color: "#a7a7a7",
      fontSize: "1rem",
      fontWeight: 700,
      "&:hover": {
        color: "#ffffff",
      },
    },
    text: {
      textTransform: "none",
      "&:hover": {
        backgroundColor: "unset",
      },
    },
  },
};
