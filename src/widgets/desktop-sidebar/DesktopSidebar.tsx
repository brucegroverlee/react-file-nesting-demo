import { styled } from "@mui/material/styles";

const DesktopSidebarRoot = styled("div")(({ theme }) => ({
  gridArea: "sidebar",
}));

export const DesktopSidebar = () => {
  return <DesktopSidebarRoot>DesktopSidebar</DesktopSidebarRoot>;
};
