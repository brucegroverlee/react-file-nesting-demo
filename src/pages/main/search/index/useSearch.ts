export function useSearch() {
  const handleSearch = (value: string) => {
    console.log("Search: ", value);
  };

  return {
    handleSearch,
  };
}
