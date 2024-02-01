import Stack from "@mui/material/Stack";

type Props = {
  title: string;
  imageUrl?: string;
};

export const ShortcutItem = ({ title, imageUrl }: Props) => (
  <Stack
    flexDirection="row"
    alignItems="center"
    gap={2}
    sx={{ backgroundColor: "rgba(255, 255, 255, 0.07)", cursor: "pointer" }}
  >
    <img src={imageUrl} width={48} />
    <div>{title}</div>
  </Stack>
);
