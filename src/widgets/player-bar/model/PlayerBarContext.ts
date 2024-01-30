import { createContext } from "react";
import { PlayerTrack } from "./PlayerTrack";

export interface PlayerBarContextValue {
  track: PlayerTrack | null;
}

export const PlayerBarContext = createContext<PlayerBarContextValue>({
  track: null,
});
