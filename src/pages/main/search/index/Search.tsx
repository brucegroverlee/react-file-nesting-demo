import { PageContainer, Header } from "src/common/ui-kit";
// import { SearchContent } from "./Search.style";

type Props = {
  onSearch: (value: string) => void;
};

export const Search = ({ onSearch }: Props) => {
  return (
    <PageContainer>
      <div>
        <Header search={{ onSearch }} />
      </div>
    </PageContainer>
  );
};
