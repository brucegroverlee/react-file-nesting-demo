import { createContext } from "react";
import { User } from "./User";

export interface AuthenticationContextValue {
  isAuthenticated: boolean;
  user: User | null;
  // login: () => void;
  // logout: () => void;
}

export const AuthenticationContext = createContext<AuthenticationContextValue>({
  isAuthenticated: false,
  user: null,
  // login: () => {},
  // logout: () => {},
});
