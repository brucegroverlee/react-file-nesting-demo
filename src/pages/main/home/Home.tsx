import { Header } from "src/common/ui-kit/header";
import { HomeRoot, HomeFilter, FilterChip } from "./Home.style";

type Props = {};

export const Home = ({}: Props) => {
  return (
    <HomeRoot>
      <div>
        <Header />
        <HomeFilter>
          <FilterChip label="All" className="active" />
          <FilterChip label="Music" />
          <FilterChip label="Podcast" />
        </HomeFilter>
      </div>

      <main></main>
    </HomeRoot>
  );
};
