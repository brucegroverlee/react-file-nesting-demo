import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

type Props = {
  text: string;
  icon: ReactNode;
  to: string;
};

export const NavigationLink = ({ text, icon, to }: Props) => {
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
