import { LibraryItem } from "./LibraryItem";
import { PlayerTrack } from "src/widgets/player-bar/model/PlayerTrack";

export function setPlayingLibraryItem(
  libraryList: LibraryItem[],
  playerTrack: PlayerTrack | null
): LibraryItem[] {
  // this is a fake implementation to demonstrate the concept of a Presenter function

  const libraryItemIndex = libraryList.findIndex(
    (libraryItem) => libraryItem.id === "2"
  );

  if (libraryItemIndex !== -1) {
    libraryList[libraryItemIndex] = {
      ...libraryList[libraryItemIndex],
      isPlaying: true,
    };
  }

  return libraryList;
}
