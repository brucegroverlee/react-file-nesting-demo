import { Search } from "./Search";
import { useSearch } from "./useSearch";

export const SearchController = () => {
  const { handleSearch } = useSearch();

  return <Search onSearch={handleSearch} />;
};
