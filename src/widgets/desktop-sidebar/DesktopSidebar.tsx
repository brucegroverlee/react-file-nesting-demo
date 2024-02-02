import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";

import { DesktopSidebarRoot, NavigationList } from "./DesktopSidebar.style";
import { YourLibrary } from "./@DesktopSidebar/your-library";
import { NavigationLink } from "./@DesktopSidebar/NavigationLink";

export const DesktopSidebar = () => {
  return (
    <DesktopSidebarRoot>
      <NavigationList>
        <NavigationLink icon={<HomeIcon />} text="Home" to="/" />
        <NavigationLink icon={<SearchIcon />} text="Search" to="/search" />
      </NavigationList>

      <YourLibrary />
    </DesktopSidebarRoot>
  );
};
