import { useQuery } from "@tanstack/react-query";
import { yourLibraryService } from "./YourLibraryService";
import { LibraryItem } from "./LibraryItem";

export function useYourLibraryList() {
  const { isLoading, error, data } = useQuery<LibraryItem[]>({
    queryKey: ["your-library-list"],
    queryFn: async () => {
      const libraryList = await yourLibraryService.getLibraryList();

      // setLibraryItemActive

      return libraryList;
    },
  });

  return {
    isLoading,
    error,
    libraryList: data ?? [],
  };
}
