import { Header } from "src/common/ui-kit/header";
import { Playlist } from "src/common/models/playlists/Playlist";

import { HomeRoot, HomeFilter, FilterChip, HomeMain } from "./Home.style";
import { Shortcuts } from "./@Home/Shortcuts";
import { HomeSection } from "./@Home/HomeSection";

type Props = {
  loading: boolean;
  shortcuts: Playlist[];
};

export const Home = ({ shortcuts }: Props) => (
  <HomeRoot>
    <div>
      <Header />
      <HomeFilter>
        <FilterChip label="All" className="active" />
        <FilterChip label="Music" />
        <FilterChip label="Podcast" />
      </HomeFilter>
    </div>

    <HomeMain>
      <Shortcuts shortcuts={shortcuts} />
      <HomeSection />
    </HomeMain>
  </HomeRoot>
);
