import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export const DesktopSidebarRoot = styled("nav")(({ theme }) => ({
  gridArea: "sidebar",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  width: 420,
}));

export const NavigationList = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2, 3),
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
}));

export const NavigationButton = styled(Button)({
  justifyContent: "flex-start",
});
NavigationButton.defaultProps = {
  variant: "text",
  fullWidth: true,
};
