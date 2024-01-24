import { ReactNode, Suspense } from "react";
import { styled } from "@mui/material/styles";
import { LoadingLayout } from "./LoadingLayout";
import { DesktopSidebar } from "src/widgets/desktop-sidebar";
import { PlayerBar } from "src/widgets/player-bar";

const DesktopLayoutGrid = styled("div")(({ theme }) => ({
  backgroundColor: "#000",
  display: "grid",
  gridTemplateAreas: `
    "sidebar main-view"
    "playing-bar playing-bar"
  `,
  gridTemplateColumns: "auto 1fr",
  gridTemplateRows: "1fr auto",
  gap: theme.spacing(2),
  height: "100vh",
  width: "100vw",
  padding: theme.spacing(2),
}));

const DesktopLayoutMainView = styled("div")(({ theme }) => ({
  gridArea: "main-view",
}));

type Props = {
  children: ReactNode;
};

export const DesktopLayout = ({ children }: Props) => {
  return (
    <DesktopLayoutGrid>
      <DesktopSidebar />

      <DesktopLayoutMainView>
        <Suspense fallback={<LoadingLayout />}>{children}</Suspense>
      </DesktopLayoutMainView>

      <PlayerBar />
    </DesktopLayoutGrid>
  );
};
