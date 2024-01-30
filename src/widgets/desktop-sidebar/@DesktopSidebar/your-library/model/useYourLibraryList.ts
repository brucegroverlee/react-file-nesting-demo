import { useQuery } from "@tanstack/react-query";
import { yourLibraryService } from "./YourLibraryService";
import { LibraryItem } from "./LibraryItem";
import { setPlayingLibraryItem } from "./YourLibraryPresenter";
import { useContext } from "react";
import { PlayerBarContext } from "src/widgets/player-bar/model/PlayerBarContext";

export function useYourLibraryList() {
  const { track } = useContext(PlayerBarContext);

  const { isLoading, error, data } = useQuery<LibraryItem[]>({
    queryKey: ["your-library-list"],
    queryFn: async () => {
      let libraryList = await yourLibraryService.getLibraryList();

      // based on the current track, set which library item is playing
      libraryList = setPlayingLibraryItem(libraryList, track);

      return libraryList;
    },
  });

  return {
    isLoading,
    error,
    libraryList: data ?? [],
  };
}
