import { setPlayingLibraryItem } from "./YourLibraryPresenter";
import { processedLibraryList } from "./__mocks__/data";

describe("setPlayingLibraryItem", () => {
  it("sets the active library item", () => {
    const updatedLibraryList = setPlayingLibraryItem(
      processedLibraryList,
      null
    );

    expect(updatedLibraryList[2]).toEqual({
      id: "2",
      image:
        "https://seed-mix-image.spotifycdn.com/v6/img/reggae/2CuzDPkRD6BJBvdWqCrt2I/en/default",
      title: "Reggae Mix",
      type: "Playlist",
      author: "Spotify",
      isPlaying: true,
    });
  });
});
