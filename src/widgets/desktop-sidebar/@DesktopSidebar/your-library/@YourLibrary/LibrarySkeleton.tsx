import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const emptyArray = new Array(10).fill(null);

export const LibrarySkeleton = () => {
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
