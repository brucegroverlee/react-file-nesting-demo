import Stack from "@mui/material/Stack";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import {
  HeaderRoot,
  HeaderIconButton,
  InstallButton,
  ProfileButton,
  ProfilePicture,
} from "./Header.style";

type Props = {
  profilePicture: string | null;
};

export const Header = ({ profilePicture }: Props) => (
  <HeaderRoot>
    <Stack flexDirection="row" gap={2}>
      <HeaderIconButton>
        <ChevronLeftIcon />
      </HeaderIconButton>

      <HeaderIconButton>
        <ChevronRightIcon />
      </HeaderIconButton>
    </Stack>

    <Stack flexDirection="row" gap={2}>
      <InstallButton>Install App</InstallButton>

      <HeaderIconButton>
        <NotificationsNoneOutlinedIcon />
      </HeaderIconButton>

      <ProfileButton>
        <ProfilePicture src={profilePicture ?? ""} />
      </ProfileButton>
    </Stack>
  </HeaderRoot>
);
