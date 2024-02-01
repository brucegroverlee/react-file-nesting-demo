import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";

export const HeaderRoot = styled("header")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2, 3),
}));

export const HeaderIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
}));

HeaderIconButton.defaultProps = {
  disableRipple: true,
};

export const InstallButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  borderRadius: 50,
  padding: theme.spacing(0, 3),
}));

InstallButton.defaultProps = {
  variant: "text",
  disableRipple: true,
  startIcon: <DownloadForOfflineOutlinedIcon />,
};

export const ProfileButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  borderRadius: 50,
  minWidth: 0,
}));

ProfileButton.defaultProps = {
  disableRipple: true,
};

export const ProfilePicture = styled("img")({
  width: 24,
  borderRadius: "50%",
});
