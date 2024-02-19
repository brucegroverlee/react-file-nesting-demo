/* eslint-disable dfra-rules/file-length-constraint-for-sx-property */
/* eslint-disable react/no-multi-comp */
import { useContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ListIcon from "@mui/icons-material/List";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

import { PlayerBarContext } from "src/widgets/player-bar/model/PlayerBarContext";
import { yourLibraryService } from "./YourLibraryService";

interface LibraryItem {
  id: string;
  image: string;
  title: string;
  type: string;
  author: string;
  isPlaying?: boolean;
}

const emptyArray = new Array(10).fill(null);

const LibrarySkeleton = () => {
  const content = emptyArray.map((_, index) => (
    <Stack key={index} flexDirection="row" gap={2} p={2}>
      <Skeleton variant="rounded" width={48} height={48} />

      <Box flexGrow={1}>
        <Skeleton variant="text" sx={{ fontSize: "1rem", width: "100%" }} />
        <Skeleton variant="text" sx={{ fontSize: "0.75rem", width: "70%" }} />
      </Box>
    </Stack>
  ));

  return <>{content}</>;
};

type NavigationLinkProps = {
  text: string;
  icon: ReactNode;
  to: string;
};

const NavigationLink = ({ text, icon, to }: NavigationLinkProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <Button
      startIcon={icon}
      onClick={handleClick}
      variant="text"
      fullWidth
      sx={{
        justifyContent: "flex-start",
      }}
    >
      {text}
    </Button>
  );
};

export const DesktopSidebar = () => {
  const { track } = useContext(PlayerBarContext);

  const { isLoading, data: libraryList } = useQuery<LibraryItem[]>({
    queryKey: ["your-library-list"],
    queryFn: async () => {
      const libraryList = await yourLibraryService.getLibraryList();

      // based on the current track, set which library item is playing
      // this is a mock implementation, in a real app this would be handled validate with the track
      const libraryItemIndex = libraryList.findIndex(
        (libraryItem) => libraryItem.id === "2" // lets the validation is based on the track
      );

      if (libraryItemIndex !== -1) {
        libraryList[libraryItemIndex] = {
          ...libraryList[libraryItemIndex],
          isPlaying: true,
        };
      }

      return libraryList;
    },
  });

  return (
    <Box
      sx={{
        gridArea: "sidebar",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: 420,
      }}
    >
      <Paper
        sx={{
          padding: "8px 12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <NavigationLink icon={<HomeIcon />} text="Home" to="/" />
        <NavigationLink icon={<SearchIcon />} text="Search" to="/search" />
      </Paper>

      <Paper
        sx={{
          padding: "16px 24px",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 2,
          }}
        >
          <Button
            sx={{
              gap: 2,
              marginInlineEnd: "auto",
            }}
          >
            <CollectionsBookmarkIcon />
            Your Library
          </Button>

          <IconButton aria-label="add">
            <AddIcon />
          </IconButton>

          <IconButton aria-label="forward">
            <ArrowForwardIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            marginTop: 3,
          }}
        >
          <Chip label="Playlist" />
          <Chip label="Artist" />
          <Chip label="Albums" />
          <Chip label="Podcasts & Shows" />
        </Box>

        <Stack flexDirection="row" justifyContent="space-between" mt={2}>
          <IconButton aria-label="search">
            <SearchIcon />
          </IconButton>

          <Button
            variant="text"
            endIcon={<ListIcon />}
            sx={{ fontSize: "0.875rem", fontWeight: 400 }}
          >
            Recents
          </Button>
        </Stack>

        <Stack sx={{ overflowY: "scroll" }}>
          {isLoading ? (
            <LibrarySkeleton />
          ) : (
            <>
              {libraryList.map((item) => (
                <Stack
                  key={item.id}
                  flexDirection="row"
                  alignItems="center"
                  gap={2}
                  sx={(theme) => ({
                    cursor: "pointer",
                    padding: theme.spacing(2),
                    "&:hover": {
                      backgroundColor: theme.palette.action.hover,
                    },
                  })}
                >
                  <Box component="img" src={item.image} width={48} />

                  <Box sx={{ marginInlineEnd: "auto" }}>
                    <Typography color={item.isPlaying ? "success.main" : ""}>
                      {item.title}
                    </Typography>

                    <Typography variant="caption">{`${item.type} · ${item.author}`}</Typography>
                  </Box>

                  {item.isPlaying && <VolumeUpIcon color="success" />}
                </Stack>
              ))}
            </>
          )}
        </Stack>
      </Paper>
    </Box>
  );
};
