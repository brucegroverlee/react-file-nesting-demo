import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";

import {
  DesktopSidebarRoot,
  NavigationButton,
  NavigationList,
} from "./styledComponents";
import { YourLibrary } from "./@DesktopSidebar/your-library";

export const DesktopSidebar = () => {
  return (
    <DesktopSidebarRoot>
      <NavigationList>
        <NavigationButton startIcon={<HomeIcon />}>Home</NavigationButton>
        <NavigationButton startIcon={<SearchIcon />}>Search</NavigationButton>
      </NavigationList>

      <YourLibrary />
    </DesktopSidebarRoot>
  );
};
