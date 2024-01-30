import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { LibraryItem as LibraryItemModel } from "../model/LibraryItem";

const LibraryItemRoot = styled(Stack)(({ theme }) => ({
  cursor: "pointer",
  padding: theme.spacing(2),
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

type Props = {
  item: LibraryItemModel;
};

export const LibraryItem = ({
  item: { image, title, type, author },
}: Props) => (
  <LibraryItemRoot flexDirection="row" gap={2}>
    <Box component="img" src={image} width={48} />

    <Box>
      <Typography>{title}</Typography>

      <Typography variant="caption">{`${type} · ${author}`}</Typography>
    </Box>
  </LibraryItemRoot>
);
