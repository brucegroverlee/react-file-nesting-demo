import { ReactNode, useState } from "react";
import { PlayerBarContext, PlayerBarContextValue } from "./PlayerBarContext";

const initValue: PlayerBarContextValue = {
  track: {
    song: {
      id: "d1e3f4e5-6e7e-8e9f-0e1e2e3e4e5e6",
      title: "Pass The Dutchie",
      artistId: "g1h2i3j4-k5l6m7n8-o9p0q1r2s3t4u5",
    },
    artist: {
      id: "g1h2i3j4-k5l6m7n8-o9p0q1r2s3t4u5",
      name: "Musical Youth",
    },
    album: {
      id: "v1w2x3y4-z5a6b7c8-d9e0f1g2h3i4j5",
      title: "The Youth Of Today",
      coverUrl:
        "https://i.scdn.co/image/ab67616d000048513d691945c91097b9f416b145",
      artistId: "g1h2i3j4-k5l6m7n8-o9p0q1r2s3t4u5",
    },
  },
};

type Props = {
  children: ReactNode;
};

export const PlayerBarProvider = ({ children }: Props) => {
  const [playerState] = useState(initValue);

  // TODO: Implement the player bar logic

  return (
    <PlayerBarContext.Provider value={playerState}>
      {children}
    </PlayerBarContext.Provider>
  );
};
