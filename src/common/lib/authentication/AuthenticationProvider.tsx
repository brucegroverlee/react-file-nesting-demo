import { ReactNode, useState } from "react";
import { AuthenticationContext } from "./AuthenticationContext";

type Props = {
  children: ReactNode;
};

export const AuthenticationProvider = ({ children }: Props) => {
  const [authentication] = useState({
    isAuthenticated: false,
    user: {
      name: "Bruce Grover Lee",
      profilePicture:
        "https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-1/373489334_6482461255206119_7244215711268417862_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=100&ccb=1-7&_nc_sid=4da83f&_nc_ohc=xMoFfNcqldYAX9PDiXA&_nc_ht=scontent-iad3-2.xx&edm=AP4hL3IEAAAA&oh=00_AfDIdxQydOb2reuFOKGzzJlegflqHIp1bpxEUhmXrQ8CrQ&oe=65BB2EAC",
    },
  });

  // TODO: Implement authentication logic (login, logout, etc.)

  return (
    <AuthenticationContext.Provider value={authentication}>
      {children}
    </AuthenticationContext.Provider>
  );
};
