import { ReactNode } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DesktopLayout } from "./@Layout/DesktopLayout";
import { MobileLayout } from "./@Layout/MobileLayout";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("xs"));

  if (isDesktop) {
    return <DesktopLayout>{children}</DesktopLayout>;
  }

  return <MobileLayout>{children}</MobileLayout>;
};
